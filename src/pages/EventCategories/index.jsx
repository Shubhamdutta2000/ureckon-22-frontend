import { Container, Grid, Paper, Typography } from '@mui/material'
import { useStyles } from './eventCategories.style'

import SearchIcon from '@mui/icons-material/Search'
import { EventCategoriesLogic } from './EventCategories'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader'

const EventCategories = () => {
  const classes = useStyles()
  const { categories, loading, fakeLoading, setFakeLoading } = EventCategoriesLogic()

  if (fakeLoading) return <Loader />

  return (
    <Container>
      <Grid container justifyContent={'space-between'} style={{ marginBottom: '30px' }}>
        <Grid item md={4}>
          <Typography variant="h2">Event Categories</Typography>
        </Grid>
        <Grid
          item
          md={2}
          alignSelf={'center'}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Link to={`/events/search`}>
            <SearchIcon style={{ color: '#fff' }} fontSize="large" />
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing="40">
        {categories &&
          categories.map((category) => (
            <Grid item md={3} xs={12}>
              <Link
                style={{ textDecoration: 'none' }}
                to={`/events/category-slug/${category.slug}`}
              >
                <Paper className={classes.categoryPaper}>
                  <img
                    src={category.icon}
                    style={{ width: '100px', marginBottom: '15px' }}
                    alt="event Category"
                  />
                  <Typography textAlign={'center'} variant="h4" style={{ color: '#fff' }}>
                    {category.categoryName}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default EventCategories
