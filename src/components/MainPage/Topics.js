import { Grid, Paper, Typography } from '@mui/material'
import styled from 'styled-components'

const TopicPaper = styled(Paper)`
  ${({ theme }) => `
    width: 80%;
    background-color: white;
    padding: 1.5rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  `}
`

export default function Topics() {
  return (
    <Grid spacing={2} container>
      <Grid align="center" item xs={12} sm={4}>
        <TopicPaper elevation={5}>
          <Typography variant="h6">BackEnd Development</Typography>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2166/2166823.png"
            alt="2021-10-29-15h40-26"
            border="0"
            width={200}
            style={{
              marginTop: 10,
            }}
          ></img>
          <Typography sx={{ marginTop: 3 }} variant="overline">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            asperiores quam sed animi nulla optio tempore a, delectus nostrum
            nihil?
          </Typography>
        </TopicPaper>
      </Grid>
      <Grid item align="center" xs={12} sm={4}>
        <TopicPaper elevation={5}>
          <Typography variant="h6">FrontEnd Development</Typography>
          <img
            src="https://i.pinimg.com/originals/3e/be/5d/3ebe5d119ac707cd463cabbba214c8f6.png"
            alt="2021-10-29-15h40-26"
            border="0"
            width={280}
            style={{
              marginTop: 10,
            }}
          ></img>

          <Typography sx={{ marginTop: 3 }} variant="overline">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            asperiores quam sed animi nulla optio tempore a, delectus nostrum
            nihil?
          </Typography>
        </TopicPaper>
      </Grid>
      <Grid align="center" item xs={12} sm={4}>
        <TopicPaper elevation={5}>
          <Typography variant="h6">Server Management</Typography>
          <img
            src="https://cdn3.iconfinder.com/data/icons/web-hosting-5/128/17-512.png"
            alt="2021-10-29-15h40-26"
            border="0"
            width={200}
            style={{
              marginTop: 10,
            }}
          ></img>
          <Typography sx={{ marginTop: 3 }} variant="overline">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            asperiores quam sed animi nulla optio tempore a, delectus nostrum
            nihil?
          </Typography>
        </TopicPaper>
      </Grid>
    </Grid>
  )
}
