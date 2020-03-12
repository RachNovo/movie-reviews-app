import React from 'react';
import AudReviewList from './Components/FakeAudReviews.jsx';
import { AppWrapper, TitleBackground, Title, ReviewWrapper, ReviewList, MainButtonContainer, MainButton, ARGlobalStyle } from './Components/Stylesheet.jsx';

// Added to ensure uniform data while deployed for display on portfolio site
import data from './mockData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: 'a great movie!',
      movieReviews: data,
      topFour: data.slice(0, 4),
      text: 'See all Audience reviews',
      expanded: false,
      isLoaded: false
    };
    this.getAudienceReviews = this.getAudienceReviews.bind(this);
    this.expandCollapse = this.expandCollapse.bind(this);
  }

  // the commented out parts below send a request to the server, for ease of deploying to heroku and displaying on portfolio site, I have loaded the data using a mockData file instead.

  getAudienceReviews() {
    // const url = new URL(window.location.href);
    // const movie = url.searchParams.get('movie');
    // fetch(`/api/audienceReviews?movie=${movie}`)
    //   .then(list => list.json())
    //   .then(returned => {
    //     this.setState({
    //       movieReviews: returned,
    //       topFour: returned.slice(0, 4)
    //     })
    //   })
    //   .then(() => this.setState({ isLoaded: true }))
    this.setState({ isLoaded: true });
  }

  expandCollapse() {
    this.state.expanded === true ? this.setState({ text: 'See all Audience reviews' }) : this.setState({ text: 'See less Audience reviews' })
    this.setState({ expanded: !this.state.expanded });
  }

  componentDidMount() {
    this.getAudienceReviews()
  }

  render () {
    var noSpaceTitle = this.state.movieName.toUpperCase().replace(/-/g, ' ');

    return (
      <>
      <ARGlobalStyle />
      <AppWrapper>
        <TitleBackground><Title>AUDIENCE REVIEWS FOR <em> &nbsp;{noSpaceTitle}</em></Title></TitleBackground>
        <ReviewWrapper>
          <ReviewList>
          {this.state.isLoaded ?
            <AudReviewList someReviews={this.state.expanded ? this.state.movieReviews : this.state.topFour}/> : null}
          </ReviewList>
        </ReviewWrapper>
        <MainButtonContainer><MainButton onClick={this.expandCollapse}>{this.state.text}</MainButton></MainButtonContainer>
      </AppWrapper>
      </>
    )
  }

}

export default App;

