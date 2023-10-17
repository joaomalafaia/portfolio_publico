import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { Description, ThemeBtn, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={18}>João Malafaia</Title>
      <Paragraph tipo="secundário" fontSize={16}>
        joaomalafaia
      </Paragraph>
      <Description tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Description>
      <ThemeBtn>Trocar tema</ThemeBtn>
    </SidebarContainer>
  </aside>
)

export default Sidebar
