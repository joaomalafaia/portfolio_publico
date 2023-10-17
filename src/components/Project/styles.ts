import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
`

export const LinkBtn = styled.a`
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`
