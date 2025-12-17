import React, { useState } from "react";
import "./css/UpdateProfile.css";

const countries = [
  { name: "India", code: "+91", flag: "fi fi-in" },
  { name: "USA", code: "+1", flag: "fi fi-us" },
  { name: "UK", code: "+44", flag: "fi fi-gb" },
  { name: "Australia", code: "+61", flag: "fi fi-au" },
  { name: "UAE", code: "+971", flag: "fi fi-ae" }
];

const passoutYears = ["2023", "2024", "2025", "2026"];

function StudentProfile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    qualification: "",
    branch: "",
    college: "",
    workingStatus: "",
  });

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [year, setYear] = useState("");
  const [showYearList, setShowYearList] = useState(false);
  const [errors, setErrors] = useState({});

  // --------------------------
  // HANDLE CHANGE
  // --------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // --------------------------
  // VALIDATION
  // --------------------------
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.mobile.trim())
      newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{10}$/.test(form.mobile))
      newErrors.mobile = "Mobile must be 10 digits";

    if (!form.dob) newErrors.dob = "Date of birth is required";
    if (!form.qualification) newErrors.qualification = "Select qualification";
    if (!form.branch.trim()) newErrors.branch = "Branch is required";

    if (!year) newErrors.year = "Passout year is required";
    else if (!passoutYears.includes(year))
      newErrors.year = "Invalid year";

    if (!form.college.trim()) newErrors.college = "College name is required";
    if (!form.workingStatus)
      newErrors.workingStatus = "Select working status";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --------------------------
  // SUBMIT
  // --------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const finalData = {
        ...form,
        mobile: `${selectedCountry.code} ${form.mobile}`,
        passoutYear: year,
      };

      console.log(finalData);
      alert("Profile Updated Successfully!");
    }
  };

  return (
    <section className="py-5 bg-warning">
      <div className="container">
        <h2 className="mb-3 fw-bold">Update Profile Details</h2>

        <div className="box shadow-sm p-4 rounded-4 border-top border-5 border-danger">
          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            {/* Mobile */}
            <label className="form-label fw-semibold">
              Mobile <span className="text-danger">*</span>
            </label>
            <div className="input-group mb-2">
              <button
                type="button"
                className="btn btn-light border dropdown-toggle d-flex align-items-center gap-2"
                data-bs-toggle="dropdown"
              >
                <span className={selectedCountry.flag}></span>
                {selectedCountry.code}
              </button>

              <ul className="dropdown-menu">
                {countries.map((c) => (
                  <li key={c.code}>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => setSelectedCountry(c)}
                    >
                      {c.name} ({c.code})
                    </button>
                  </li>
                ))}
              </ul>

              <input
                type="text"
                name="mobile"
                className="form-control"
                value={form.mobile}
                onChange={handleChange}
              />
            </div>
            {errors.mobile && <small className="text-danger">{errors.mobile}</small>}

            {/* DOB & Qualification */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  value={form.dob}
                  onChange={handleChange}
                />
                {errors.dob && <small className="text-danger">{errors.dob}</small>}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  Qualification *
                </label>
                <select
                  name="qualification"
                  className="form-select"
                  value={form.qualification}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>B.Tech</option>
                  <option>MCA</option>
                  <option>B.Sc</option>
                  <option>M.Tech</option>
                </select>
                {errors.qualification && (
                  <small className="text-danger">{errors.qualification}</small>
                )}
              </div>
            </div>

            {/* Branch & Year */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  Branch *
                </label>
                <input
                  type="text"
                  name="branch"
                  className="form-control"
                  value={form.branch}
                  onChange={handleChange}
                />
                {errors.branch && <small className="text-danger">{errors.branch}</small>}
              </div>

              <div className="col-md-6 mb-3 position-relative">
                <label className="form-label fw-semibold">
                  Passout Year *
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={year}
                  onFocus={() => setShowYearList(true)}
                  onChange={(e) => setYear(e.target.value)}
                />
                {errors.year && <small className="text-danger">{errors.year}</small>}

                {showYearList && (
                  <ul className="list-group position-absolute w-100">
                    {passoutYears.map((y) => (
                      <li
                        key={y}
                        className="list-group-item list-group-item-action"
                        onMouseDown={() => {
                          setYear(y);
                          setShowYearList(false);
                        }}
                      >
                        {y}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* College */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                College Name *
              </label>
              <input
                type="text"
                name="college"
                className="form-control"
                value={form.college}
                onChange={handleChange}
              />
              {errors.college && <small className="text-danger">{errors.college}</small>}
            </div>

            {/* Working Status */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Working Status *
              </label>
              <select
                name="workingStatus"
                className="form-select"
                value={form.workingStatus}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Student</option>
                <option>Working</option>
                <option>Unemployed</option>
              </select>
              {errors.workingStatus && (
                <small className="text-danger">{errors.workingStatus}</small>
              )}
            </div>

            <div className="text-end">
              <button className="btn btn-dark px-4">
                Save
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default StudentProfile;
