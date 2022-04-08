import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface IPhasePresentationCardValues {
  image_url: string
  image_alt: string
  content_heading: string
  content_body: string
  link: string
}

interface IPhasePresentationCard {
  values: IPhasePresentationCardValues
}

export default function PhasePresentationCard(props: IPhasePresentationCard) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.values.image_url}
        alt={props.values.image_alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.values.content_heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.values.content_body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{`Read More`}</Button>
      </CardActions>
    </Card>
  )
}
