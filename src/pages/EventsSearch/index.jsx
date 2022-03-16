import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, IconButton, CardActions, Grid, Container } from '@mui/material'
import './eventsSearch.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import SearchExpand from '../../components/SearchExpand'
import { useStyles } from './eventSearch.style'
import { Link } from 'react-router-dom'
import { EventSearchLogic } from './EventsSearch'

const EventsSearch = () => {
  const classes = useStyles()
  const { eventsList, setSearchedEventName } = EventSearchLogic()

  return (
    <>
      <Container>
        <Grid container>
          <Grid item flexGrow={1} m={2}>
            <h1 className="headingStyle">Searched EVENTS</h1>
          </Grid>
          <Grid item md={2}>
            <SearchExpand setSearchedEventName={setSearchedEventName} />
          </Grid>
        </Grid>

        <Grid display="flex" justifyContent="center" flexWrap="wrap">
          {eventsList &&
            eventsList &&
            eventsList.map((event) => (
              <Grid className={classes.mainBox} p={2}>
                <Card className={classes.cardStyle} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt={event.eventName}
                    height="180"
                    image={event.icon}
                  />
                  <Typography gutterBottom variant="h5" component="div">
                    {event.eventName}
                  </Typography>
                  <CardActions className={classes.pdng} padding={0}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Link
                          style={{ textDecoration: 'none' }}
                          to={`/events/${event.code}/event-register`}
                        >
                          <Button className={classes.btn1} size="small">
                            Register
                          </Button>
                        </Link>
                      </Grid>
                      <Grid item xs={6}>
                        <Link
                          style={{ textDecoration: 'none' }}
                          to={`/event/${event.code}`}
                        >
                          <Button className={classes.btn2} size="small">
                            Know more
                            <IconButton size="large" aria-label="search" color="inherit">
                              <ArrowForwardIcon className={classes.icon} />
                            </IconButton>
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  )
}

export default EventsSearch
