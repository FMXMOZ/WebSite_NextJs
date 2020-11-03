import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    image: {
      backgroundUrl: "url('/images/slide03.jpg')",
      height: 100
    }
  })
)
const Hero: React.FC = () => {
  const classes = useStyles()

  return (
    <div id="hero">
      <Grid className="fill-height px-4 py-12">
        <div className="row align-items-center">
          <div className="col-12 text-center text-sm-left">
            <div className="intro_layers_wrapper">
              <div className="intro_layers d-flex flex-column flex-md-row align-items-md-center">
                <div
                  className="intro_layer animated fadeIn"
                  data-animation="fadeIn"
                >
                  <img src="/images/chess.png'" />
                </div>
                <div
                  className="intro_layer animated fadeInLeft"
                  data-animation="fadeInLeft"
                  data-delay="150"
                >
                  <h3 className="text-uppercase thin">
                    Federação Moçambicana
                    <span className="color-main text-capitalize bold">
                      De Xadrez
                    </span>
                  </h3>
                  <p>Seja Benvido ao Nossa Pagina</p>
                </div>
              </div>

              <div className="d-flex flex-wrap">
                <Button className="btn-maincolor">Inicie Agora</Button>

                <span className="font-weight-bold ml-6 mr-4 my-4">ou</span>

                <Button>Acompanhem-nos no facebook</Button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  )
}

export default Hero
