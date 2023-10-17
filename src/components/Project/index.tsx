import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBtn } from './styles'

export const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph tipo="secundário">Lista de tarefas feita com VueJS</Paragraph>
    <LinkBtn>Visualizar</LinkBtn>
  </Card>
)
