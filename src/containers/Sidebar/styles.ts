import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ThemeBtn = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  left: 0;
  top: 80px;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 40px;
  }
`
