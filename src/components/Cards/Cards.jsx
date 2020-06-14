import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css'
import cx from 'classnames';

const Cards = ({data: {confirmed, deaths, lastUpdate, recovered}}) => {
    if(!confirmed){
        return "Loading...";
    }

    const cards=[
        {'title': 'Infected', 'endValue': confirmed.value, 'description':'Number of Active Cases of COVID-19'},
        {'title': 'Recoveries', 'endValue': recovered.value, 'description': 'Number of recoveries from COVID-19'},
        {'title': 'Deaths', 'endValue': deaths.value, 'description': 'Number of death caused by COVID-19'}
    ]

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
               {cards.map(card=> (
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{card.title}</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={card.endValue} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">{card.description}</Typography>
                    </CardContent>
                </Grid>
               ))}
            </Grid>
            
        </div>
    )
}

export default Cards;
