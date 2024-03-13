

export default function Calculator({handleChange}) {

  return (
    <>
      <label>Initial Investment</label>
      <input
        type="number"
        required
       
        onChange={event =>
          handleChange("initialInvestment", event.target.value)
        }
      />
      <label>Annual Investment</label>
      <input
        type="number"
        required
     
        onChange={event =>
          handleChange("aunnualInvestment", event.target.value)
        }
      />
      <label>Expected Return</label>
      <input
        type="number"
        required

        onChange={event =>
          handleChange("expectedReturn", event.target.value)
        }
      />
      <label>Duration</label>
      <input
        type="number"
        required
  
        onChange={event =>
          handleChange("duration", event.target.value)
        }
      />
    </>
  );
}
