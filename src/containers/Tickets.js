import React from 'react';
import styledComponents from 'styled-components';
import withDataFetching from '../withDataFetching';
import Ticket from '../components/Ticket/Ticket';

const TicketsWrapper = styledComponents.div`
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 5%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Alert = styledComponents.div`
    text-align: center;
`;

const Tickets = ({ loading, data, error }) => (
    <TicketsWrapper>
        {(loading || error) && <Alert>{ loading ? 'Loading...' : error }</Alert>}
        {data.map(ticket => <Ticket key={ticket.id} marginRight ticket={ticket} />)}
    </TicketsWrapper>
);

export default withDataFetching(Tickets);