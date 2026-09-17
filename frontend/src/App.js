import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import axios from "axios";

import {
  Package,
  Archive,
  IndianRupee,
  AlertCircle,
  Plus,
} from "lucide-react";

import Header from "./components/header";
import Footer from "./components/footer";
import TaglineSection from "./TaglineSection";

import "./App.css";


const api = axios.create({
  baseURL: "https://fastapi-1cmf.onrender.com",
});


function App() {

  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const [editId, setEditId] = useState(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const [filter, setFilter] = useState("");

  const [sortField, setSortField] = useState("id");

  const [sortDirection, setSortDirection] =
    useState("asc");


  /* ==========================
     GET PRODUCTS
  ========================== */

  const fetchProducts = async () => {

    setLoading(true);

    try {

      const response =
        await api.get("/products/");

      setProducts(response.data);

      setError("");

    } catch (err) {

      setError(
        "Unable to connect to FastAPI."
      );

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {

    fetchProducts();

  }, []);


  /* ==========================
     FORM
  ========================== */

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  const resetForm = () => {

    setForm({
      id: "",
      name: "",
      description: "",
      price: "",
      quantity: "",
    });

    setEditId(null);
  };


  /* ==========================
     CREATE / UPDATE
  ========================== */

  const handleSubmit = async (event) => {

    event.preventDefault();

    setLoading(true);

    setMessage("");
    setError("");

    const payload = {
      ...form,

      id: Number(form.id),

      price: Number(form.price),

      quantity: Number(form.quantity),
    };


    try {

      if (editId) {

        await api.put(
          `/products/${editId}`,
          payload
        );

        setMessage(
          "Product updated successfully."
        );

      } else {

        await api.post(
          "/products/",
          payload
        );

        setMessage(
          "Product added successfully."
        );

      }


      resetForm();

      await fetchProducts();

    } catch (err) {

      setError(
        err.response?.data?.detail ||
        "Operation failed."
      );

    } finally {

      setLoading(false);

    }

  };


  /* ==========================
     EDIT
  ========================== */

  const handleEdit = (product) => {

    setForm({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    });

    setEditId(product.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* ==========================
     DELETE
  ========================== */

  const handleDelete = async (id) => {

    const confirmed =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmed) return;

    setLoading(true);

    try {

      await api.delete(
        `/products/${id}`
      );

      setMessage(
        "Product deleted successfully."
      );

      await fetchProducts();

    } catch (err) {

      setError(
        "Unable to delete product."
      );

    } finally {

      setLoading(false);
    }
  };


  /* ==========================
     SORT
  ========================== */

  const handleSort = (field) => {

    if (sortField === field) {

      setSortDirection(
        previous =>
          previous === "asc"
            ? "desc"
            : "asc"
      );

    } else {

      setSortField(field);

      setSortDirection("asc");

    }
  };


  /* ==========================
     FILTER + SORT
  ========================== */

  const filteredProducts = useMemo(() => {

    const query =
      filter.trim().toLowerCase();


    const result =
      products.filter((product) => {

        if (!query) return true;

        return (

          String(product.id)
            .includes(query)

          ||

          product.name
            ?.toLowerCase()
            .includes(query)

          ||

          product.description
            ?.toLowerCase()
            .includes(query)

        );

      });


    return [...result].sort(
      (a, b) => {

        let first = a[sortField];

        let second = b[sortField];


        if (
          sortField === "id" ||
          sortField === "price" ||
          sortField === "quantity"
        ) {

          first = Number(first);

          second = Number(second);

        } else {

          first =
            String(first ?? "")
              .toLowerCase();

          second =
            String(second ?? "")
              .toLowerCase();

        }


        if (first < second) {

          return sortDirection === "asc"
            ? -1
            : 1;

        }


        if (first > second) {

          return sortDirection === "asc"
            ? 1
            : -1;

        }


        return 0;

      }
    );

  }, [
    products,
    filter,
    sortField,
    sortDirection,
  ]);


  /* ==========================
     STATISTICS
  ========================== */

  const totalUnits =
    products.reduce(
      (sum, product) =>
        sum +
        Number(product.quantity || 0),
      0
    );


const inventoryValue = products.reduce(
  (total, product) =>
    total +
    Number(product.price || 0) * Number(product.quantity || 0),
  0
);


  const lowStock =
    products.filter(
      product =>
        Number(product.quantity) <= 10
    ).length;


  return (

    <div className="app-shell">


      <Header
        onRefresh={fetchProducts}
        loading={loading}
      />


      <main>


        {/* ==========================
            HERO
        ========================== */}

        <section
          className="hero"
          id="overview"
        >

          <div className="hero-content">

            <div className="hero-copy">

              <span className="hero-label">
                INVENTORY CONTROL / 01
              </span>


              <h1>

                Know what you have.

                <br />

                <span>
                  Manage what matters.
                </span>

              </h1>


              <p>

                A focused inventory workspace
                for products, stock levels and
                everyday operations.

              </p>


              <button
                className="hero-button"
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >

                <Plus size={16} />

                Add or manage products

              </button>

            </div>


            <div className="hero-number">

              <span>OR</span>

              <strong>01</strong>

              <small>
                INVENTORY
              </small>

            </div>

          </div>

        </section>


        {/* ==========================
            DASHBOARD
        ========================== */}

        <section className="dashboard">


          {/* STAT CARDS */}

          <div className="stats-grid">


            <div className="stat-card">

              <div className="stat-icon">
                <Package size={18} />
              </div>

              <span>
                PRODUCTS
              </span>

              <strong>
                {products.length}
              </strong>

              <small>
                Products recorded
              </small>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                <Archive size={18} />
              </div>

              <span>
                UNITS
              </span>

              <strong>
                {totalUnits.toLocaleString(
                  "en-IN"
                )}
              </strong>

              <small>
                Total stock quantity
              </small>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                <IndianRupee size={18} />
              </div>

              <span>
                INVENTORY VALUE
              </span>

              <strong>
                ₹
                {inventoryValue.toLocaleString(
                  "en-IN"
                )}
              </strong>

              <small>
                Current stock valuation
              </small>

            </div>


            <div className="stat-card">

              <div className="stat-icon">
                <AlertCircle size={18} />
              </div>

              <span>
                LOW STOCK
              </span>

              <strong>
                {lowStock}
              </strong>

              <small>
                10 units or fewer
              </small>

            </div>

          </div>


          {/* NOTIFICATION */}

          {(message || error) && (

            <div
              className={
                error
                  ? "notification error"
                  : "notification success"
              }
            >

              <span>
                {error || message}
              </span>

              <button
                onClick={() => {
                  setMessage("");
                  setError("");
                }}
              >
                ×
              </button>

            </div>

          )}


          {/* MAIN WORKSPACE */}

          <div className="workspace">


            {/* PRODUCTS */}

            <section
              className="inventory-panel"
              id="products"
            >

              <div className="panel-header">

                <div>

                  <span className="eyebrow">
                    CATALOG
                  </span>

                  <h2>
                    Product inventory
                  </h2>

                  <p>
                    Current products and
                    stock availability.
                  </p>

                </div>


                <div className="product-count">

                  {filteredProducts.length}

                  <span>
                    visible
                  </span>

                </div>

              </div>


              {/* SEARCH */}

              <div className="inventory-toolbar">

                <input
                  type="text"
                  placeholder="Search products..."
                  value={filter}
                  onChange={(e) =>
                    setFilter(e.target.value)
                  }
                />

                <select
                  value={sortField}
                  onChange={(e) =>
                    setSortField(e.target.value)
                  }
                >

                  <option value="id">
                    Sort: ID
                  </option>

                  <option value="name">
                    Sort: Name
                  </option>

                  <option value="price">
                    Sort: Price
                  </option>

                  <option value="quantity">
                    Sort: Quantity
                  </option>

                </select>


                <button
                  className="sort-direction"
                  onClick={() =>
                    setSortDirection(
                      previous =>
                        previous === "asc"
                          ? "desc"
                          : "asc"
                    )
                  }
                >

                  {sortDirection === "asc"
                    ? "↑"
                    : "↓"}

                </button>

              </div>


              {/* TABLE */}

              <div className="table-wrapper">

                <table>

                  <thead>

                    <tr>

                      <th>ID</th>

                      <th>PRODUCT</th>

                      <th>DESCRIPTION</th>

                      <th>PRICE</th>

                      <th>STOCK</th>

                      <th>STATUS</th>

                      <th></th>

                    </tr>

                  </thead>


                  <tbody>

                    {filteredProducts.map(
                      (product) => {

                        const quantity =
                          Number(
                            product.quantity
                          );


                        let status =
                          "In stock";

                        let statusClass =
                          "good";


                        if (quantity === 0) {

                          status =
                            "Out of stock";

                          statusClass =
                            "danger";

                        } else if (
                          quantity <= 10
                        ) {

                          status =
                            "Low stock";

                          statusClass =
                            "warning";

                        }


                        return (

                          <tr key={product.id}>

                            <td>
                              #{product.id}
                            </td>


                            <td>

                              <div className="product-name">

                                <div className="product-avatar">
                                  <Package size={15} />
                                </div>

                                <strong>
                                  {product.name}
                                </strong>

                              </div>

                            </td>


                            <td>

                              <span className="description">
                                {product.description}
                              </span>

                            </td>


                            <td>

                              <strong>
                                ₹
                                {Number(
                                  product.price
                                ).toLocaleString(
                                  "en-IN",
                                  {
                                    minimumFractionDigits: 2,
                                  }
                                )}
                              </strong>

                            </td>


                            <td>
                              {quantity}
                            </td>


                            <td>

                              <span
                                className={`stock-status ${statusClass}`}
                              >

                                <span />

                                {status}

                              </span>

                            </td>


                            <td>

                              <div className="table-actions">

                                <button
                                  onClick={() =>
                                    handleEdit(
                                      product
                                    )
                                  }
                                >
                                  Edit
                                </button>


                                <button
                                  className="delete"
                                  onClick={() =>
                                    handleDelete(
                                      product.id
                                    )
                                  }
                                >
                                  Delete
                                </button>

                              </div>

                            </td>

                          </tr>

                        );

                      }
                    )}


                    {!filteredProducts.length && (

                      <tr>

                        <td
                          colSpan="7"
                          className="empty"
                        >
                          No products found.
                        </td>

                      </tr>

                    )}

                  </tbody>

                </table>

              </div>

            </section>


            {/* RIGHT COLUMN */}

            <aside className="right-column">


              {/* FORM */}

              <section className="form-panel">

                <div className="panel-header">

                  <div>

                    <span className="eyebrow">
                      {editId
                        ? "EDIT PRODUCT"
                        : "NEW PRODUCT"}
                    </span>

                    <h2>
                      {editId
                        ? "Update product"
                        : "Add product"}
                    </h2>

                  </div>


                  {editId && (

                    <button
                      className="cancel-button"
                      onClick={resetForm}
                    >
                      Cancel
                    </button>

                  )}

                </div>


                <form
                  onSubmit={handleSubmit}
                  className="product-form"
                >

                  <label>
                    Product ID

                    <input
                      type="number"
                      name="id"
                      value={form.id}
                      onChange={handleChange}
                      disabled={!!editId}
                      required
                    />

                  </label>


                  <label>
                    Product name

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Wireless Mouse"
                      required
                    />

                  </label>


                  <label>
                    Description

                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Brief product description"
                      rows="3"
                      required
                    />

                  </label>


                  <div className="form-row">

                    <label>

                      Price

                      <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                      />

                    </label>


                    <label>

                      Quantity

                      <input
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        min="0"
                        required
                      />

                    </label>

                  </div>


                  <button
                    className="submit-button"
                    disabled={loading}
                  >

                    {loading
                      ? "Saving..."
                      : editId
                        ? "Save changes"
                        : "Add to inventory"}

                  </button>

                </form>

              </section>


              <TaglineSection />


            </aside>

          </div>

        </section>

      </main>


      <Footer />

    </div>
  );
}

export default App;