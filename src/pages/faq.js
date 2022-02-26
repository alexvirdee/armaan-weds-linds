import React from "react"
import Navbar from "../components/layout/Navbar"
import Collapsible from "react-collapsible"
import styled from "styled-components"
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
            innerAnswer: "Indian Formal",
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
          {
            innerAnswer:
              "Please keep in mind that during the day is can get quite warm!",
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
        id: "From the main entrance you can meet at the bell station, from there someone will help to transport you to the area via golf cart or bus.",
      },
      {
        id: " If you are in the mood to walk please feel free to do so, it takes about 10 minutes. The concierge will be happy to assist with directions in the lobby.",
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
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Title>FAQ</Title>
      <FAQContainer>
        <Accordion>
          {faqData.map(item => {
            console.log("Data ===> ", item)
            return (
              <>
                <CollapsibleSection
                  key={item.id}
                  trigger={<Trigger text={item.question} />}
                  triggerStyle={{ display: "block", cursor: "pointer" }}
                  triggerWhenOpen={<TriggerOpen text={item.question} />}
                >
                  {item.answers.map((answer, index) => {
                    console.log("Top Level Answer ===> ", answer)
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
                              key={index}
                              triggerWhenOpen={<TriggerOpen text={answer.id} />}
                            >
                              <CollapsibleAnswers>
                                {answer.answer.map((target, index) => {
                                  console.log("What is target??", target)
                                  return (
                                    <InnerAnswer key={index}>
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

const CollapsibleAnswers = styled.p`
  padding-left: 20px;
`

const InnerAnswer = styled.div`
  padding: 4px 8px 4px 8px;
  margin: 12px 2px 12px 2px;
`

export default FAQ
