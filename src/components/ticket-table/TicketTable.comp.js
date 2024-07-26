import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const TicketTable = () => {
  const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
  };

  const { searchTicketList, isLoading, error } = useSelector((state) => state.tickets);

  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error}</h3>;

  // Sort the tickets by openAt date in descending order (newest first)
  const sortedTickets = [...searchTicketList].sort((a, b) => 
    new Date(b.openAt) - new Date(a.openAt)
  );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {sortedTickets.length ? (
          sortedTickets.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                <Link to={`/ticket/${row._id}`} style={linkStyle}>
                  {row.subject}
                </Link>
              </td>
              <td>{row.status}</td>
              <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} className='text-center'>No ticket to show{" "}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};