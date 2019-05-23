import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom'


const MigrationColumn = styled.div`
  margin-left: 10rem;
  margin-top: 3rem;
  margin-right: 10rem;
  margin-bottom: 8rem;`

const MigrationDiv = styled.div`
  background-color: #F7F7F7;
  padding: 0 auto;
  margin-bottom: 2rem;
  margin-top: 3rem
  border-radius: 1rem;
  border: 0.25rem solid #1E3B67;`

const MigrationFormDiv = styled.div`
  color: #1E3B67 !important;
  display: flex;
  flex-direction: row;
  justify-content: space-around;`

const MigrationTextGroup = styled.div`
  margin-bottom: 1rem;`

const MigrationText = styled.div`
  margin-left: 1rem;
  margin-top: 2rem;`

const MigrationDetailsText = styled.div`
  margin-left: 1rem;
  font-size: 0.95rem;`

const MigrationSelect = styled(Select)`
  width: 14rem;`

const MigrationH3 = styled.h2`
  margin-left: 1rem;`

const MigrationButton = styled(Button)`
  background-color: #B9C9E4 !important;
  color: #1E3B67 !important;
  box-shadow: 0.2rem 0.2rem #888888 !important;
  margin-bottom: 1rem !important;
  margin-top: 1rem !important;
  &&:active {
    transform: translateY(0.1rem) !important;
    box-shadow: 0.1rem 0.1rem #888888 !important;
  }`

const MigrationButtonLink = styled(Link)`
  text-decoration: none;
  color: #F7F7F7;`

export {
  MigrationColumn,
  MigrationDiv,
  MigrationFormDiv,
  MigrationTextGroup,
  MigrationDetailsText,
  MigrationText,
  MigrationSelect,
  MigrationH3,
  MigrationButton,
  MigrationButtonLink
}
