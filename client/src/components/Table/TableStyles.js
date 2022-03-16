import styled from 'styled-components'

export const Styles = styled.div`
.tableWrap {
  display: block;
  margin: 0 auto;
  max-width: 80vw;
  overflow-x: scroll;
  overflow-y: hidden;
  border: 1px solid #191970;
}

table {
  width: 100%;
  border-spacing: 0;

  tr {
    :nth-child(even) {
      background: #B0E0E6;
    }

    th {
      color: #fff;
      background: #5F9EA0	
    }
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #191970;
    border-right: 1px solid #191970;

    width: 1%;

    :last-child {
      border-right: 0;
    }
  }

  .pagination {
    padding: 0.5rem;
  }
}

  `
    