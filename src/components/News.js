import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [
        {
          source: {
            id: "info-money",
            name: "InfoMoney",
          },
          author: "Lucas Gabriel Marins",
          title:
            "Bitcoin passa por correção e gera nova onda de liquidação em massa",
          description:
            "Com exceção de dois tokens pequenos, todas as criptomoedas operam no negativo hoje",
          url: "https://www.infomoney.com.br/onde-investir/bitcoin-hoje-passa-por-correcao-em-meio-a-onda-de-liquidacao-em-massa/",
          urlToImage:
            "https://www.infomoney.com.br/wp-content/uploads/2023/12/GettyImages-1453534485.jpg?quality=70",
          publishedAt: "2024-03-15T11:23:34Z",
          content:
            "Após renovar mais uma vez sua máxima histórica, o Bitcoin (BTC) passou por correção e gerou uma liquidação ampla no mercado de criptomoedas. Com exceção de dois tokens com baixo valor de mercado, tod… [+5069 chars]",
        },
        {
          source: {
            id: "wired",
            name: "Wired",
          },
          author: "Wired",
          title:
            "Craig Wright Is Not Bitcoin Creator Satoshi Nakamoto, Judge Declares",
          description:
            "A surprisingly fast ruling at the end of a six-week trial in the UK High Court ends Craig Wright's campaign to be recognized as the inventor of Bitcoin.",
          url: "https://www.wired.com/story/craig-wright-not-satoshi-nakamoto-bitcoin-creator-ruling",
          urlToImage:
            "https://media.wired.com/photos/65f23b3fad3d9deb2399fd38/191:100/w_1280,c_limit/Craig-Wright-Trial-Closing-Arguments-Business-1979196340.jpg",
          publishedAt: "2024-03-14T14:01:17Z",
          content:
            "A judge in the UK High Court has declared that Australian computer scientist Craig Wright is not Satoshi Nakamoto, the creator of Bitcoin, marking the end of a years-long debate.\r\nThe evidence is ove… [+3119 chars]",
        },
      ],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  render() {
    return (
      <>
        {console.log("hi")}
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top Headlines
        </h1>
        {/* ********BELOW Line in js was like when this.state.loading == 0 show me the Loader component so when wherever you use this this.state.loading if it is true then it loads loader(spinnger) html component*/}
        {this.state.loading && <Loader />}

        <div className="container">
          <div className="container">
            <div className="row">
              {console.log(this.state.articles)}
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*<div className="container d-flex justify-content-between">
          <button disabled ={this.state.page<=1} type="button" class = "btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
          <button disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className = "btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
      </div>*/}
      </>
    );
  }
}

export default News;
