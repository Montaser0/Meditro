import "./Appoinment.css";
import persone from "../../../assets/persone.png";
export const Appoinment = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <form className="form">
          <form>
            <h3 className="form-title">Book Appoinment</h3>
                  <select
                  >
                    <option value="Select">Select Department</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                  </select>
                  

                  <select
                  >
                    <option value="Select">Doctor</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                  </select>
                  

                  <input
                    type="text"
                    placeholder="Your Name"
                  />

                  <input
                    type="number"
                    placeholder="Phone Number"
                  />
                <input type="date" id="dateInput" name="dateInput"/>
                <button type="submit">Appoinment Now</button>
              </form>
          </form>
        </div>

        {/* <div className="col-lg-3 col-md-3 img-1">
          <img src={mobile} alt="mobile" />
        </div> */}
        <div className="col-lg-3 col-md-3 person-img">
          <img src={persone} alt="persone" />
        </div>
      </div>
    </div>
  );
};