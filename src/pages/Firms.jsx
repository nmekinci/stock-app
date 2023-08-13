import { useEffect } from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"
import useStockCall from "../hooks/useStockCall"
import FirmCard from "../components/FirmCard"


const Firms = () => {
  

  const { getStockData } = useStockCall()
  const { firms } = useSelector((state) => state.stock)

  useEffect(() => {
    // getFirms()
    getStockData("firms")
  }, [])

  console.log(firms)
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained">NEW FIRM</Button>

      <Grid container justifyContent={"center"} spacing={2}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Firms
