import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph tipo="principal">
      Lorem iParagraphsum dolor sit amet, consectetur adipisicing elit. Quis,
      natus. Recusandae, porro praesentium sed, minima hic blanditiis nisi
      commodi ex quia, officiis optio. Eius, nemo. Atque voluptate recusandae
      obcaecati!
    </Paragraph>
    <GithubSection>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=joaomalafaia&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=joaomalafaia&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSection>
  </section>
)

export default Sobre
