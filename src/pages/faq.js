import React, { useEffect, useRef } from "react"
import Navbar from "../components/layout/Navbar"
import Collapsible from "react-collapsible"
import styled from "styled-components"
import Linkify from "react-linkify"
import { createGlobalStyle } from "styled-components"
import "@fontsource/barlow-condensed"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

const faqData = [
  {
    id: 1,
    question: "Covid 19 Related Questions",
    answers: [
      {
        id: "We are so excited to have all of our loved ones with us on our special day! We will be doing our best to keep everyone safe. It is very important that all guests be fully vaccinated. We will continue to stay up-to-date with guidelines! If there are any questions please reach out to Armaan or Lindsay.",
      },
    ],
  },
  {
    id: 2,
    question: "What is the dress code?",
    answers: [
      {
        id: "Sangeet",
        answer: [
          {
            innerAnswer: "Indian festive or Cocktail attire ",
          },
        ],
      },
      {
        id: "Ceremony",
        answer: [
          {
            innerAnswer:
              "Indian preferred, please dress comfortably. We do ask that all guests have legs covered",
          },
          {
            innerAnswer:
              "Please keep in mind that during the day it can get quite warm!",
          },
        ],
      },
      {
        id: "Cocktail Hour & Reception",
        answer: [
          {
            innerAnswer: "Formal Attire",
          },
          {
            innerAnswer:
              "Ladies we request long dresses and either suits or tuxes for men",
          },
        ],
      },
      {
        id: "For those looking for Indian outfits here are a few websites and stores to check out",
        answer: [
          {
            innerAnswer: "https://shopkynah.com/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    question: "Can I bring a date?",
    answers: [
      {
        id: "We want close family and friends on our special day, please refer to your invite!",
      },
    ],
  },
  {
    id: 4,
    question: "Are kids invited?",
    answers: [
      {
        id: "While we love your little ones, our wedding is going to be an adults-only event so that everyone can relax and enjoy the evening. We appreciate you making arrangements ahead of time and leaving the kids at home so you can celebrate with us",
      },
      {
        id: "Cheeca lodge offers babysitting services. Please contact the concierge at 305-517-4411 to further assist you.",
      },
    ],
  },
  {
    id: 5,
    question: "How do I get to the Casitas?",
    answers: [
      {
        id: "From the main entrance at Cheeca Lodge you can meet at the bell station. From there someone will help transport you to the area via golf cart or bus. If you are in the mood to walk please feel free to do so it takes a total of 10 minutes. The concierge will be happy to assist with directions in the lobby.",
      },
    ],
  },
  {
    id: 6,
    question: "What are the weather conditions?",
    answers: [
      {
        id: "In October, the average high is around 85 °F and the low is around 75 °F",
      },
    ],
  },
  {
    id: 7,
    question: "What to expect during the wedding ceremony",
    answers: [
      {
        id: "Sikh ceremony",
        answer: [
          {
            innerAnswer:
              "Anand Karaj meaning “blissful union” involves the Guru Granth Sahib, it is the holiest book in the Sikh faith. The Guru Granth Sahib must sit above all participants. As such, during the ceremony, unless unable, guests will be asked to sit on the ground and to remove their shoes. Cushions will be provided, as well as chairs for those who are unable to sit on the ground. Additionally, we will be asking all guests to cover their heads as a sign of respect to the Guru Granth Sahib. Head coverings will be provided.",
          },
          {
            innerAnswer:
              "To mark the end of the Sikh ceremony Karah prashad will be served to our guests. Please accept this sweet offering with both hands.",
          },
          {
            innerAnswer:
              "Immediately following will commence the Hindu ceremony.",
          },
        ],
      },
    ],
  },
]

const Trigger = props => {
  return (
    <MainTriggerStyle>
      <div>{props.text}</div>
      <Chevron>&#8250;</Chevron>
    </MainTriggerStyle>
  )
}

const TriggerOpen = props => {
  return (
    <MainTriggerStyle>
      <div>{props.text}</div>
      <Chevron>&#8964;</Chevron>
    </MainTriggerStyle>
  )
}

const FAQ = () => {
  useEffect(() => {
    // Check answers for any links and convert them to an anchor tag
    let links = []

    const allInnerAnswers = Array.from(
      document.getElementsByClassName("innerAnswer")
    )

    allInnerAnswers.forEach(answer => {
      if (answer.innerText.includes("http")) {
        links.push(answer)
        console.log("links", links)
      }
    })

    const convertToAnchorTag = arr => {
      arr.map(item => {
        // let convert = (item = (
        //   <a href={`${item}`} target="_blank">
        //     `${item}`
        //   </a>
        // ))

        // return convert

        // let converted = (item.textContent = (
        //   <a href={`${item}`} target="_blank">
        //     `${item}`
        //   </a>
        // ))

        let converted = <Linkify>`${item}`</Linkify>

        return converted
      })
    }

    convertToAnchorTag(links)
    console.log("converted", convertToAnchorTag(links))
  }, [])

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Title>FAQ</Title>
      <FAQContainer>
        <Accordion>
          {faqData.map(item => {
            return (
              <>
                <CollapsibleSection
                  key={`${item.id}-section`}
                  trigger={<Trigger text={item.question} />}
                  triggerStyle={{ display: "block", cursor: "pointer" }}
                  triggerWhenOpen={<TriggerOpen text={item.question} />}
                >
                  {item.answers.map((answer, index) => {
                    return (
                      <>
                        {answer.answer !== undefined ? (
                          <>
                            <InnerCollapsibleSection
                              trigger={<Trigger text={answer.id} />}
                              triggerStyle={{
                                display: "block",
                                cursor: "pointer",
                                paddingLeft: "25px",
                                paddingRight: "15px",
                              }}
                              key={`${index}-answer`}
                              triggerWhenOpen={<TriggerOpen text={answer.id} />}
                            >
                              <CollapsibleAnswers>
                                {answer.answer.map((target, index) => {
                                  return (
                                    <InnerAnswer
                                      key={`${index}-innerAnswer`}
                                      className={"innerAnswer"}
                                    >
                                      {target.innerAnswer}
                                    </InnerAnswer>
                                  )
                                })}
                              </CollapsibleAnswers>
                            </InnerCollapsibleSection>
                          </>
                        ) : (
                          <CollapsibleAnswers>{answer.id}</CollapsibleAnswers>
                        )}
                      </>
                    )
                  })}
                </CollapsibleSection>
              </>
            )
          })}
        </Accordion>
      </FAQContainer>
    </>
  )
}

const Title = styled.h1`
  font-family: "Barlow Condensed";
  text-align: center;
`

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainTriggerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 2px 4px 2px;
`

const Chevron = styled.div`
  font-family: "Barlow Condensed";
  font-size: 1.4rem;
`

const Accordion = styled.div`
  width: 60vw;
  padding: 15px;
  font-family: "Barlow Condensed";

  @media (max-width: 768px) {
    width: 90vw;
  }
`

const CollapsibleSection = styled(Collapsible)`
  border: 1px solid lightgray;
  padding: 10px;

  &:hover {
    background-color: #fcb2a9;
  }
`

const InnerCollapsibleSection = styled(Collapsible)`
  border: 1px solid lightgray;
  padding: 10px;

  :last-child {
    margin-bottom: 18px;
  }

  &:hover {
    background-color: #fcb2a9;
  }
`

const CollapsibleAnswers = styled.div`
  padding: 10px 2px 10px 20px;
`

const InnerAnswer = styled.div`
  padding: 10px 8px 4px 8px;
  margin: 12px 2px 12px 2px;
`

export default FAQ
