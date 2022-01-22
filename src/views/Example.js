import React, { Component, useState } from "react";
import InputDate from "components/Form/InputDate/InputDate";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
// export default class Example extends Component {
//   state = {
//     value: {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   };
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   render() {
//     console.log(this.state);
//     return (
//       <div className="container">
//         <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
//           <div className="col-auto">
//             <InputDate max={30} onChange={this.handleChange} name="value" value={this.state.value} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default function Example() {
  const [value, setValue] = useState({ startDate: new Date(), endDate: new Date(), key: "selection" });

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];
  return (
    <div className="container">
      <Breadcrumb data={breadcrumb} />
      {console.log(value)}
      <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="col-auto">
          <InputDate max={30} onChange={handleChange} name="value" value={value} />
        </div>
      </div>
    </div>
  );
}
