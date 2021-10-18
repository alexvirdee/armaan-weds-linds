import React from "react"
import Navbar from "../components/layout/Navbar"
import styled from "styled-components"
import "@fontsource/great-vibes"
import "@fontsource/open-sans"
import { createGlobalStyle } from "styled-components"
import { StaticImage } from "gatsby-plugin-image";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-family: "Great Vibes";
`

const StoryText = styled.div`
  font-family: "Open Sans";
  padding: 35px;
  width: 80%;
  animation: fade 1s ease-in;

  @keyframes fade {
      0% {
          opacity: 0;
      }
  }
`

const ourStory = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Title>Our Story</Title>
        <StaticImage width={300} src="../images/leaf-divider.png" />
        <StoryText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
          lacus eget nisi viverra vehicula vitae non nisi. Cras nisi mauris,
          auctor quis posuere et, consequat nec arcu. Donec pretium, diam nec
          porttitor sollicitudin, sapien ex ultrices ipsum, ac facilisis enim
          nisl id dui. Duis sed posuere enim. Suspendisse pulvinar condimentum
          feugiat. Vivamus varius egestas turpis, sit amet accumsan neque
          placerat id. Mauris aliquam lacinia massa nec efficitur. Nunc vel
          tortor accumsan nulla dictum condimentum ut in velit. Mauris sed
          feugiat libero, eu viverra sapien. Mauris massa enim, consequat sed
          lacinia eget, egestas quis dui. In elementum odio id commodo tempus.
          Nam at libero pharetra, imperdiet ante id, elementum augue. Phasellus
          pharetra, magna sed consequat vestibulum, justo diam commodo magna, eu
          lacinia risus elit vel ante. Maecenas malesuada suscipit justo, at
          dignissim quam. Donec ut ante sed dolor finibus rhoncus ac quis justo.
          Sed dictum maximus lacus sed faucibus. Nunc lacinia orci a purus
          auctor vehicula. Curabitur cursus turpis elit, quis ullamcorper eros
          tempus quis. Aliquam vel neque blandit, condimentum ex id, sodales
          velit. Vivamus vehicula metus in est vestibulum facilisis. Aenean at
          fringilla lacus. Sed quis congue leo. Nunc nec ullamcorper est.
          Curabitur varius, nisl sit amet dignissim faucibus, urna dui
          vestibulum tortor, quis pulvinar erat elit sit amet eros. Vivamus
          turpis lorem, congue in accumsan id, feugiat at nulla. Aliquam sed ex
          nisi. Vivamus id dictum lacus, eget volutpat neque. Etiam elementum
          purus a iaculis ultrices. Vivamus nec venenatis orci, ac sagittis dui.
          Phasellus sapien odio, sollicitudin quis metus at, imperdiet accumsan
          neque. Cras tincidunt urna et elementum sagittis. Cras nec justo
          interdum, condimentum massa vitae, venenatis libero. Nullam ut massa
          vel orci suscipit facilisis. Proin ut odio est. In sit amet volutpat
          sem, non luctus elit. Etiam sollicitudin, nibh nec dictum lacinia,
          diam justo mattis eros, ut eleifend lacus leo eget mauris. Nam et nunc
          consequat, porttitor tellus eleifend, egestas nisi. Cras in velit ut
          mi vehicula lobortis. Pellentesque tempor ligula dolor, quis auctor
          turpis pulvinar quis. Praesent porttitor, ligula ac egestas malesuada,
          ipsum ex auctor nulla, id pellentesque lacus metus vitae orci. Nunc
          pharetra felis ac tellus molestie mattis sit amet et quam. Vestibulum
          congue viverra ex, a blandit magna commodo non. In hac habitasse
          platea dictumst. Fusce dignissim efficitur turpis a sagittis.
          Pellentesque placerat tristique dui, eu ornare mi tempor in. Phasellus
          sodales, mi cursus cursus viverra, magna nibh scelerisque tortor, eget
          vulputate sapien metus quis purus. Duis tempus, tellus quis
          ullamcorper varius, turpis odio congue arcu, vel aliquet sapien sem et
          lectus. Vivamus enim enim, dignissim nec laoreet quis, eleifend et
          felis.
        </StoryText>
      </Container>
    </>
  )
}

export default ourStory
