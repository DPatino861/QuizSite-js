const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a type of cheese",
        answers: [
            {
                id: 0,
                text: "Brie",
                image: "https://images.unsplash.com/photo-1658530785687-8985358c01ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJyaWUlMjBjaGVlc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Wheel of Brie Cheese",
                credit: "Robert Linder"
            },
            {
                id: 1,
                text: "Parmesan",
                image: "https://images.unsplash.com/photo-1646369735716-b425db671b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80://images.unsplash.com/photo-1658530785687-8985358c01ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJyaWUlMjBjaGVlc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Wheels of Parmesan Cheese",
                credit: "Kelly Visel"
            },
            {
                id: 2,
                text: "American",
                image: "https://cdn.schwans.com/media/images/products/62172-1-640.jpg?v=636619949110939273",
                alt: "Slices of American Cheese",
                credit: "Alexis Bailey"
            },
            {
                id: 3,
                text: "Blue Cheese",
                image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Wedge of Blue Cheese",
                credit: "Towfiqu Barbhuiya"
            }
        ]
    },
    {
        id: 1,
        text: "Pick a study location",
        answers: [
            {
                id: 0,
                text: "Prison",
                image: "https://images.unsplash.com/photo-1554702781-ce40d39ae66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fER1bmdlb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Dark prison room with one chair",
                credit: "Spencer Tamichi"
            },
            {
                id: 1,
                text: "Coffee Shop",
                image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMHNob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Small desk with phone, notebook, and coffee",
                credit: "Toa Heftiba"
            },
            {
                id: 2,
                text: "Spooky Forest",
                image: "https://images.unsplash.com/photo-1505567745926-ba89000d255a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9vZHklMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                alt: "Spooky Forest with dim lighting",
                credit: "Niilo Isotalo"
            },
            {
                id: 3,
                text: "Boat",
                image: "https://images.unsplash.com/photo-1575658075190-c7b80d4a5e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBib2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                alt: "Small boat on ocean",
                credit: "Steve Saunders"
            }
        ]

    },
    {
        id: 2,
        text: "Pick a pet rock",
        answers: [
            {
                id: 0,
                text: "Sad Rock",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Mycb1Ob-T7D2w8aXfFe0fpCJzEyE054r1NXLlv7V8GbG26qosNLrLaBMRoNRJDpEYHc&usqp=CAU",
                alt: "Rock with Googly eyes",
                credit: "Steve Summers"
            },
            {
                id: 1,
                text: "Crazy Rock",
                image: "https://www.pet-rocks.co.uk/shop/uploaded/rock005.jpg",
                alt: "Crazy rock with Googly eyes",
                credit: "pet-rocks.co"
            },
            {
                id: 2,
                text: "Sunburnt Rock",
                image: "https://www.pet-rocks.co.uk/shop/uploaded/brick-small-orange-eyes.jpg",
                alt: "Orange rock with Googly eyes",
                credit: "pet-rocks.co"
            },
            {
                id: 3,
                text: "Chill Rock",
                image: "https://www.pet-rocks.co.uk/shop/uploaded/silver-dollar.jpg",
                alt: "Flat rock with Googly eyes",
                credit: "pet-rocks.co"
            },

        ]

    }
]

score = 0;

const answers = [
    {
        top: 3,
        bot: 0,
        text: "Trombone",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKOE9kVVZZ-cxqAp3D-rTHSuit9gCLlvcrMLBlvfqDTRuG0ep7robIe3WzAtSJbZt3qE&usqp=CAU",
        alt: "Trombone"
    },
    {
        top: 5,
        bot: 3,
        text: "Oboe",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93nI0OdOaFYMvIrex8u8CK9Q_ztgualHgxg&usqp=CAU",
        alt: "Oboe"
    },
    {
        top: 7,
        bot: 5,
        text: "Viola",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg59pQ6eBsTCQgHJr3IAGrn1DOI91mD30Ijw&usqp=CAU",
        alt: "Viola"

    },
    {
        top: 10,
        bot: 7,
        text: "Triangle",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9HNaoabun_wYCVPhbojdprY_8eztmdVC7w&usqp=CAU",
        alt: "Triangle"

    }
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text

        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text, answer.id))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)
            
            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text


            answerBlock.append(answerImage, answerTitle)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)
    })
}

populateQuestions()

const handleClick = (id, ans, val) => {
    if(unansweredQuestions.includes(id)) {
        chosenAnswers.push(ans)
        score = score + val
        console.log(val)
    }
    const toRemove = unansweredQuestions.indexOf(id)

    if(toRemove > -1) {
        unansweredQuestions.splice(toRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)
    console.log(score)

    disableQuestionBlock(id, ans)
    const lowestId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestId

    if(!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let result = answers[0]
    answers.forEach(answer => {
        if ((score < answer.top) && (score >= answer.bot)) {
            result = answer
        }
    })

    console.log(result)

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)
    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(ans => ans.replaceWith(ans.cloneNode(true)))
}

const disableQuestionBlock = (id, ans) => {
    const curr = document.getElementById(id + "-questions")

    Array.from(curr.children).forEach(b => {
        if(b.children.item(1).innerText != ans) {
            b.style.opacity = "50%"
        }
    })
}