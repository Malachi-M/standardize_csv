import styled from 'styled-components'

export const TableContainer = styled.div`
background-color: #fff;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
margin: 1.5rem auto 0;
overflow: auto;
width: 100%;
height: calc(100% - 4.75em);
`

export const Table = styled.table``

export const TableHeader = styled.thead`
  font-size: .75em;
  font-weight: 500;
  color: rgba(0,0,0,0.54);  
  text-align: right;
`
export const HeaderRow = styled.tr`
  height: 3.5rem;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  border-collapse: collapse;
`
export const HeaderCell = styled.th`
  padding: .25rem 3.5rem .25rem 1.5rem;
  border-bottom: 1px solid rgba(224,224,224,1);
`
export const TableRow = styled.tr`
  height: 3rem;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  border-collapse: collapse;
`

export const TableCell = styled.td`
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.8125rem;
  font-weight: 400;
  text-align: right;
  padding: .25rem 3.5rem .25rem 1.5rem;
  border-bottom: 1px solid rgba(224,224,224,1);
`