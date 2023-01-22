import React from "react";
import "./FirstSolution.css";

export default function FirstSolution() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Ph-no</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Education</th>
                    <th className="actions">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tablerows">
                    <td>1</td>
                    <td>Haris</td>
                    <td>0324-1235342</td>
                    <td>hk741505@gmail.com</td>
                    <td>Rawalpindi Peshawar road saddar</td>
                    <td>BS Computer Science</td>
                    <td className="actions">
                      <button className="btn" disabled="disabled">
                        disabled
                      </button>
                      <button className="btn">Edit</button>
                    </td>
                  </tr>
                  <tr className="tablerows">
                    <td>2</td>
                    <td>Haris</td>
                    <td>0324-1235342</td>
                    <td>hk741505@gmail.com</td>
                    <td>Rawalpindi Peshawar road saddar</td>
                    <td>BS Computer Science</td>
                    <td className="actions">
                      <button className="btn" disabled="disabled">
                        disabled
                      </button>
                      <button className="btn">Edit</button>
                    </td>
                  </tr>
                  <tr className="tablerows">
                    <td>3</td>
                    <td>Haris</td>
                    <td>0324-1235342</td>
                    <td>hk741505@gmail.com</td>
                    <td>Rawalpindi Peshawar road saddar</td>
                    <td>BS Computer Science</td>
                    <td className="actions">
                      <button className="btn" disabled="disabled">
                        disabled
                      </button>
                      <button className="btn">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
