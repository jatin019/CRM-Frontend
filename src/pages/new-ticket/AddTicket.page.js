import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp';
import { shortText } from '../../utility/validation';

const initialFrmDt = {
    subject: '',
    issueDate: '',
    detail: '',
};

const initialFrmError = {
    subject: false,
    issueDate: false,
    detail: false,
};

export const AddTicket = () => {
    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);

    useEffect(() => {}, [frmData, frmDataError]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setFrmData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setFrmDataError(initialFrmError);

        const isSubjectValid = await shortText(frmData.subject);
        setFrmDataError({
            ...initialFrmError,
            subject: !isSubjectValid,
        });

        console.log('Form submit request received', frmData);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <AddTicketForm
                        handleOnChange={handleOnChange}
                        frmDt={frmData}
                        frmDataError={frmDataError}
                        handleOnSubmit={handleOnSubmit}
                    />
                </Col>
            </Row>
        </Container>
    );
};
