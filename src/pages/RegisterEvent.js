import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import "../components/css/registerevent.css";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PersonIcon from "@mui/icons-material/Person";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import eventIllustration from "../images/eventreg.svg";
import chat from "../images/chat.svg";
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { DataContext } from "../context";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const RegisterEvent = () => {
  return (
    <div>
      <NavBar />
      <div className="event-form">
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/appJtI8AIFRPLuUeo/shrjP4iKNiubQn2jz?backgroundColor=cyan"
          onWheel={() => {}}
          width="100%"
          height="100%"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterEvent;

// const RegisterEvent = (props) => {
//   const { id } = useParams();
//   const { events } = useContext(DataContext);
//   const navigate = useNavigate();

//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [colg, setcolg] = useState("");
//   const [branch, setbranch] = useState("");
//   const [phone, setphone] = useState();
//   const [queries, setqueries] = useState("");
//   const [refcode, setrefcode] = useState("");
//   const [open, setOpen] = useState(false);
//   const [error, setError] = useState(false);
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [disabled, setdisabled] = useState(false);
//   const [validated, setvalidated] = useState(false);

//   const url = process.env.REACT_APP_AIRTABLE_API;
//   const key = process.env.REACT_APP_AIRTABLE_TOKEN;
//   console.log("API URL:", url);
//   console.log("API Key:", key);

//   const post = async () => {
//     setdisabled(true);
//     setLoading(true);
//     const now = new Date();
//     const body = {
//       records: [
//         {
//           fields: {
//             Name: name,
//             Email: email,
//             College: colg,
//             Branch: branch,
//             "Referral Code": refcode,
//             Phone: phone,
//             Query: queries,
//             Time: now,
//           },
//         },
//       ],
//     };
//     axios
//       .post(`${url}/${data.registration_link}`, body, {
//         headers: {
//           Authorization: key,
//         },
//       })
//       .then((res) => {
//         console.log("first");
//         setError(false);
//         setOpen(true);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("error", err);
//         setError(true);
//         setOpen(true);
//         setLoading(false);
//       });
//   };

//   const validate = (e) => {
//     e.preventDefault();
//     let invalid = false;
//     const form = e.currentTarget;
//     if (form.checkValidity() === false) {
//       invalid = true;
//       setvalidated(false);
//     }
//     setvalidated(true);
//     if (!invalid) post();
//   };

//   const date = (d) => {
//     let dt = new Date(d);
//     const time = `${dt.getHours() % 12}:${dt.getMinutes()}${
//       dt.getHours() < 12 ? "am" : "pm"
//     }`;
//     const date = `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
//     return `${time} ${date}`;
//   };

//   const clearText = () => {
//     setname("");
//     setphone();
//     setemail("");
//     setcolg("");
//     setbranch("");
//     setqueries("");
//     setrefcode("");
//   };

//   useEffect(() => {
//     const event = events.find((e) => e._id === id) || null;
//     if (event) setData(event);
//     else navigate("/");
//   });

//   if (loading) return <Loader />;

//   return (
//     <div>
//       {/* ======================TOAST======================== */}
//       <Collapse in={open}>
//         <Alert
//           action={
//             <IconButton
//               aria-label="close"
//               color="inherit"
//               size="small"
//               onClick={() => {
//                 setdisabled(false);
//                 if (!error) clearText();
//                 setOpen(false);
//                 if (!error) navigate("/");
//               }}
//             >
//               <CloseIcon fontSize="inherit" />
//             </IconButton>
//           }
//           sx={{ mb: 2 }}
//           severity={error ? "error" : "success"}
//           variant="filled"
//         >
//           {error ? "Registration Failed" : "Registered Successfully!"}
//         </Alert>
//       </Collapse>
//       {/* ============================================== */}

//       <NavBar />
//       <div className="event-form">
//         <div className="form-title shadow p-3 mb-5 bg-white rounded">
//           <span className="heading">{data.event_name}</span>
//           <div className="details">
//             <span className="reg-speaker">
//               <PersonIcon />
//               {data.host_name}
//             </span>
//             <span className="date">
//               <QueryBuilderIcon marginright="10px" />
//               {date(data.startDate)}
//             </span>
//           </div>
//           <img src={eventIllustration} alt="img" />
//         </div>

//         <Form noValidate validated={validated} onSubmit={validate}>
//           <Form.Group className="mb-3" controlId="validationName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Enter Name"
//               value={name}
//               onChange={(e) => {
//                 setname(e.target.value);
//               }}
//               disabled={disabled}
//             />
//             <Form.Control.Feedback type="invalid">
//               Name is required
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="validationEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               required
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => {
//                 setemail(e.target.value);
//               }}
//               disabled={disabled}
//             />
//             <Form.Control.Feedback type="invalid">
//               Invalid Email
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="validationColg">
//             <Form.Label>College</Form.Label>
//             <Form.Control
//               type="text"
//               required
//               placeholder="Enter College"
//               value={colg}
//               onChange={(e) => {
//                 setcolg(e.target.value);
//               }}
//               disabled={disabled}
//             />
//             <Form.Control.Feedback type="invalid">
//               College is required
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group
//             className="mb-3"
//             controlId="validationBrch"
//             aria-required="true"
//           >
//             <Form.Label>Branch</Form.Label>
//             <Form.Control
//               type="text"
//               required
//               placeholder="Branch"
//               value={branch}
//               onChange={(e) => {
//                 setbranch(e.target.value);
//               }}
//               disabled={disabled}
//             />
//             <Form.Control.Feedback type="invalid">
//               Branch is required
//             </Form.Control.Feedback>
//           </Form.Group>

//           {/* <Form.Group className="mb-3" controlId="validationRefCode">
//              <Form.Label>Referral Code</Form.Label>
//              <Form.Control
//                type="text"
//                placeholder="Enter Referral Code"
//                value={refcode}
//                onChange={(e) => {
//                  setrefcode(e.target.value);
//                }}
//                disabled={disabled}
//              />
//            </Form.Group> */}

//           <Form.Group className="mb-3" controlId="validationPh">
//             <Form.Label>Phone</Form.Label>
//             <Form.Control
//               type="tel"
//               required
//               placeholder="Enter Phone Number"
//               value={phone}
//               onChange={(e) => {
//                 setphone(e.target.value);
//               }}
//               disabled={disabled}
//             />
//             <Form.Control.Feedback type="invalid">
//               Invalid phone number
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="validationQuery">
//             <Form.Label>Queries for Speaker</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={4}
//               placeholder="Enter Queries"
//               value={queries}
//               onChange={(e) => {
//                 setqueries(e.target.value);
//               }}
//               disabled={disabled}
//             />
//           </Form.Group>

          // {/* ==================whatsapp================== */}
          // <div className="white group-left form-title shadow p-3 mb-5 rounded">
          //   <h6 style={{ maxWidth: "250px" }} className="group-left">
          //     Please join any one of the EETIF WhatsApp groups if you haven't
          //     joined yet
          //   </h6>
          //   <div className="group-left details">
          //     <ul>
          //       <li>
          //         <a
          //           href="https://chat.whatsapp.com/LFxXV0QWFgd330aSbZcEqY"
          //           target="_blank"
          //         >
          //           Group 1
          //         </a>
          //       </li>
          //       <li>
          //         <a
          //           href="https://chat.whatsapp.com/Ee5I0M0jMnU9Ahbju8pimt"
          //           target="_blank"
          //         >
          //           Group 2
          //         </a>
          //       </li>
          //       <li>
          //         <a
          //           href="https://chat.whatsapp.com/KSYDievd94r0oKNlZjF85T"
          //           target="_blank"
          //         >
          //           Group 3
          //         </a>
          //       </li>
          //       <li>
          //         <a
          //           href="https://chat.whatsapp.com/KuFMbBYwrvc2gMDQ0vvER9"
          //           target="_blank"
          //         >
          //           Group 4
          //         </a>
          //       </li>
          //     </ul>
          //   </div>
          //   <img src={chat} alt="img" className="show group-img" />
          // </div>
          // {/* ============================================ */}

//           <Button variant="primary" disabled={disabled} type="submit">
//             Register
//           </Button>
//         </Form>
//       </div>
//       <Footer />
//     </div>
//   );
// };
