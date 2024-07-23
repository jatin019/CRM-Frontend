import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Breadcrumb.comp.css";

export const PageBreadcrumb = ({ page }) => {
  return (
    <Container fluid className="breadcrumb-container">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};
