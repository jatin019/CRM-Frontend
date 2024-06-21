import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import tickets from '../../assets/data/dummy-tickets.json'

export const TicketLists = () => {
  const [str, setStr] = useState('')
  const [dispTicket, setDispTicket] = useState(tickets)

  useEffect(() => {
    searchTicket(str)
  }, [str])

  const handleOnChange = (e) => {
    const { value } = e.target
    setStr(value)
  }

  const searchTicket = (sttr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sttr.toLowerCase())
    )
    setDispTicket(displayTickets)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  )
}
