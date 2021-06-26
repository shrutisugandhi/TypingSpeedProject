import React from "react";
import "./App.css";
import Nav from "../NavBar/Nav";
import Landing from "../Landing/Landing";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Footer from "../Footer/Footer";

const TotalTime = 60;
const ParagraphAPI =
    "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text";
const defaultState = {
    selectedParagraph: "",
    timeRemaining: TotalTime,
    timerStarted: false,
    words: 0,
    characters: 0,
    speedWPM: 0,
    testInfo: [],
};
class App extends React.Component {
    //statefull class compoenents which use Lifecycle() methods instead of React hooks which are used in functional (stateless) Components
    state = defaultState;
    // constructor(props) {
    //     super(props);
    //     this.handleUserInput = this.handleUserInput.bind(this);
    // }
    fetchDataFromAPI = () => {
        fetch(ParagraphAPI)
            .then((response) => response.text())
            .then((data) => {
                // this.setState({ selectedParagraph: information });
                const selectedParagraphArray = data.split("");
                const testInfoArray = selectedParagraphArray.map(
                    (selecteChar) => {
                        return {
                            letter: selecteChar,
                            status: "notAttempted",
                        };
                    }
                );
                this.setState({
                    ...defaultState,
                    testInfo: testInfoArray,
                    selectedParagraph: data,
                });
            });
        // const selectedParagraphArray = this.state.selectedParagraph.split("");
        // const testInfoArray = selectedParagraphArray.map((selecteChar) => {
        //     return {
        //         letter: selecteChar,
        //         status: "notAttempted",
        //     };
        // });
        // this.setState({ testInfo: testInfoArray });
    };
    componentDidMount() {
        this.fetchDataFromAPI();
    }

    componentDidUpdate() {
        //  console.log(this.state);
    }
    handleUserInput = (inputValue) => {
        //console.log("inputVal>>", inputValue);
        if (!this.state.timerStarted) {
            this.handleStartTimer();
        }

        const inputCharacters = inputValue.length;

        const inputWords = inputValue.split("").length;

        const index = inputCharacters - 1;

        if (index < 0) {
            //setting first character as not attempted
            this.setState({
                //handled underflow case
                testInfo: [
                    {
                        letter: this.state.testInfo[0].letter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters: inputCharacters,
                words: inputWords,
            });
            return;
        }

        if (index >= this.state.selectedParagraph.length) {
            //handled overflow case
            this.setState({
                characters: inputCharacters,
                words: inputWords,
            });
            return;
        }

        //make a copy of original data ie testInfo
        const cloneTestInfo = this.state.testInfo;
        if (!(index === this.state.testInfo.length - 1)) {
            cloneTestInfo[index + 1].status = "notAtempted"; //handled backspace case
        }

        //check for correct typed letter
        const isCorrect = inputValue[index] === cloneTestInfo[index].letter;

        //update testInfo
        cloneTestInfo[index].status = isCorrect ? "correct" : "incorrect";

        //update state
        this.setState({
            testInfo: cloneTestInfo,
            characters: inputCharacters,
            words: inputWords,
        });
    };
    startAgain = () => {
        //alert("start");
        this.fetchDataFromAPI();
    };
    handleStartTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                //change wpm
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm =
                    timeSpent > 0
                        ? (this.state.words / timeSpent) * TotalTime
                        : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    speedWPM: parseInt(wpm),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    };

    render() {
        // console.log("Data Array in render ", this.state.testInfo);
        return (
            <div className="app">
                {/* NavBar Section */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Typing part */}
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraphArray}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.speedWPM}
                    timeRemain={this.state.timeRemaining}
                    timerStart={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;

//API are ways of two application to communicate with each other means
//external service which help us to perform our info gathering
//instead of creating own info

//eg.Gathereing weather forecast info

//Lifecycle methods generally come with class based components only
//function componenets uses Hooks in replacement of lifecycle methods

//Every Class Based components follow Lifecycle Methods :
// constructor -> render -> componentDidMount() [as soon as render() called eg.as soon as component loaded on browser initial stage i have to call an landing msg ] ->
//componentDidMount ()-> as soon as state/componenet changed ->componentDidUpdate()
//componentDidMount ()-> as soon as component is to be removed -> componentDidUnmount()

//componentDidUnmount() ->To clean up memory or to show error/success msg

// API EndPoint For Paragraph in TextType Container->
// https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text

// $.ajax({
//   url: "",
//   method: "Post",
//   data: {
//     id:managerId
//   }
// }).done(function () {

// }).error(function () {

// })
