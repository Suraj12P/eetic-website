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
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { DataContext } from "../context";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const RegisterEvent = (props) => {
  const { id } = useParams();
  const { events } = useContext(DataContext);
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [colg, setcolg] = useState("");
  const [branch, setbranch] = useState("");
  const [phone, setphone] = useState();
  const [queries, setqueries] = useState("");
  const [refcode, setrefcode] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [disabled, setdisabled] = useState(false);

  const url = process.env.REACT_APP_AIRTABLE_API;
  const key = process.env.REACT_APP_AIRTABLE_TOKEN;

  const post = async () => {
    setdisabled(true);
    setLoading(true);
    const now = new Date();
    const body = {
      records: [
        {
          fields: {
            Name: name,
            Email: email,
            College: colg,
            Branch: branch,
            "Referral Code": refcode,
            Phone: phone,
            Query: queries,
            Time: now,
          },
        },
      ],
    };
    axios
      // .post(`${url}/${data.registration_link}`, body, {
      .post(`${url}/appe7738Eu3vxE9aq/tblsbPPC02OnofLXz`, body, {
        headers: {
          Authorization: key,
        },
      })
      .then((res) => {
        console.log("first");
        setError(false);
        setOpen(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setError(true);
        setOpen(true);
        setLoading(false);
      });
  };

  const validate = () => {
    const invalid = false;
    console.log({ name, email, colg, branch, phone, refcode, queries });
    return !invalid;
  };

  const date = (d) => {
    let dt = new Date(d);
    const time = `${dt.getHours() % 12}:${dt.getMinutes()}${
      dt.getHours() < 12 ? "am" : "pm"
    }`;
    const date = `${dt.getDate()}/${dt.getMonth()}/${dt.getFullYear()}`;
    console.log(`${time} ${date}`);
    return `${time} ${date}`;
  };

  const clearText = () => {
    setname("");
    setphone();
    setemail("");
    setcolg("");
    setbranch("");
    setqueries("");
    setrefcode("");
  };

  useEffect(() => {
    const event = events.find((e) => e._id === id) || null;
    if (event) setData(event);
    else navigate("/");
  });

  if (loading) return <Loader />;

  return (
    <div>
      {/* ======================TOAST======================== */}
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setdisabled(false);
                clearText();
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity={error ? "error" : "success"}
          variant="filled"
        >
          {error ? "Registration Failed" : "Registered Successfully!"}
        </Alert>
      </Collapse>
      {/* ============================================== */}

      <NavBar />
      <div className="event-form">
        <div className="form-title shadow p-3 mb-5 bg-white rounded">
          <span className="heading">{data.event_name}</span>
          <div className="details">
            <span className="reg-speaker">
              <PersonIcon />
              {data.host_name}
            </span>
            <span className="date">
              <QueryBuilderIcon marginRight="10px" />
              {date(data.startDate)}
            </span>
          </div>
          <img src={eventIllustration} alt="img" />
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              disabled={disabled}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              disabled={disabled}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>College</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter College"
              value={colg}
              onChange={(e) => {
                setcolg(e.target.value);
              }}
              disabled={disabled}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicText"
            aria-required="true"
          >
            <Form.Label>Branch</Form.Label>
            <Form.Control
              type="text"
              placeholder="Branch"
              value={branch}
              onChange={(e) => {
                setbranch(e.target.value);
              }}
              disabled={disabled}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Referral Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Referral Code"
              value={refcode}
              onChange={(e) => {
                setrefcode(e.target.value);
              }}
              disabled={disabled}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
              disabled={disabled}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Queries for Speaker</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter Queries"
              value={queries}
              onChange={(e) => {
                setqueries(e.target.value);
              }}
              disabled={disabled}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => {
              if (validate()) post();
            }}
            disabled={disabled}
          >
            Register
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterEvent;
