import React,{useState} from "react";
// import axios from "axios";


const Subscriptions = () => {
     const [data, setData] = useState({
        name:"",
        email:"",
        pack:"",
        amount:""
     });
    



     const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
     }

    //  const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post(`https://sheet.best/api/sheets/fe5d4df9-5108-48d2-8489-0ef93431fecb`, data)
    //  }

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch(
            "https://sheet.best/api/sheets/fe5d4df9-5108-48d2-8489-0ef93431fecb",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className="Auth-form-content">
        <h3>Subscription data </h3>
      <form style={{ maxWidth: 500, margin: "auto" }} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pack" className="form-label">
          Pack
        </label>
        <input
          type="text"
          className="form-control"
          name="pack"
          value={data.pack}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Amount
        </label>
        <input
         type="text"
          className="form-control"
          name="amount"
          value={data.amount}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default Subscriptions;
