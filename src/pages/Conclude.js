import React , { useState , useEffect } from 'react'
import {
    Button,
    Row,
    Col,
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Table 
} from "reactstrap";
import {
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import axios from 'axios';
// import BlankSide from '../components/BlankSide';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';


    


function Conclude() {

    const [graphA,setgraphA] = useState(null)
    const [graphB,setgraphB] = useState(null)
    const [show,setShow] = useState(false)
    const [dateRe,setDateRe] = useState(null)
    const [loading,setLoading] = useState(false)
    const [test,setTest] = useState(null)
    const tempName=[]
    const tempTotalP=[]
    const tempTotalC=[]

    
    const toggle = () => setShow(!show)

    const getData = async() => {
      setLoading(true)
      const currentdate = new Date();
      const dateOnAdd = currentdate.getFullYear() +
      "-" +
      (currentdate.getMonth() + 1 < 10
        ? "0" + (currentdate.getMonth() + 1)
        : currentdate.getMonth() + 1) +
      "-" +
      (currentdate.getDate() < 10
        ? "0" + currentdate.getDate()
        : currentdate.getDate())

      await axios.post('https://posappserver.herokuapp.com/getreportdate',{
        Branch_ID:localStorage.getItem('Branch_ID'),
        DateSell_History: dateOnAdd
      }).then((res)=>{
        console.log(res.data)
        tempName.push(...res.data.map((e,idx)=>e.Goods_Name))
        tempTotalP.push(...res.data.map((e,idx)=>e['SUM(Sell_History.Price_Total)']))
        tempTotalC.push(...res.data.map((e,idx)=>e['SUM(Sell_History.Count_Sell)']))
        setgraphA({
          labels: tempName,
          datasets: [
            {
              label: 'บาท',
              data: tempTotalP,
              backgroundColor: [
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        })
        setgraphB({
          labels: tempName,
          datasets: [
            {
              label: 'ชิ้น',
              data: tempTotalC,
              backgroundColor: [
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        })
        setLoading(false)
  
      })

     

    }
  

    useEffect(()=>{
    
     
      getData()
      
    },[])

  

    

    // const data = {
    //   labels: [product.map((e)=>{
    //     console.log(e.Goods_ID)
    //     return(e.Goods_ID)})],
    //   datasets: [
    //     {
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)',
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)',
    //       ],
    //       borderWidth: 1,
    //     },
    //   ],
    // };
  
    const data2 = {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: '# of Red Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgb(255, 99, 132)',
          stack: 'Stack 0',
        },
        {
          label: '# of Blue Votes',
          data: [2, 3, 20, 5, 1, 4],
          backgroundColor: 'rgb(54, 162, 235)',
          stack: 'Stack 0',
        },
        {
          label: '# of Green Votes',
          data: [3, 10, 13, 15, 22, 30],
          backgroundColor: 'rgb(75, 192, 192)',
          stack: 'Stack 1',
        },
      ],
    };

    


    // const data4 = product.map(()=>)
    
 
   
  
   
    
    const options = {
      indexAxis: 'y',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Chart.js Horizontal Bar Chart',
        },
      },
    };
  
    const options2 = {
      indexAxis: 'y',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Chart.js Horizontal Bar Chart',
        },
      },
    };

    const dateQuery = async(e) => {
      await axios.post('https://posappserver.herokuapp.com/getreportdate',{
        Branch_ID:localStorage.getItem('Branch_ID'),
        DateSell_History: e.target.value
      }).then((res)=>{
        console.log(res.data)
        tempName.push(...res.data.map((e,idx)=>e.Goods_Name))
        tempTotalP.push(...res.data.map((e,idx)=>e['SUM(Sell_History.Price_Total)']))
        tempTotalC.push(...res.data.map((e,idx)=>e['SUM(Sell_History.Count_Sell)']))
        setgraphA({
          labels: tempName,
          datasets: [
            {
              label: 'บาท',
              data: tempTotalP,
              backgroundColor: [
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        })
        setgraphB({
          labels: tempName,
          datasets: [
            {
              label: 'ชิ้น',
              data: tempTotalC,
              backgroundColor: [
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 10)',
                'rgba(54, 162, 235, 10)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        })
    })
  }

  const dateQueryReport = async(e) => {
    console.log(dateRe.substring(0,7))
    await axios.post('https://posappserver.herokuapp.com/getreportmonth',{
      Branch_ID:localStorage.getItem('Branch_ID'),
      DateSell_History: dateRe.substring(0,7)
    }).then((res)=>{
     console.log(res)
  })
}

    


    return (
        <motion.div initial={{translateX:500}} animate={{translateX:-50}} transition={{duration:0.5}}   className="content" style={{overflow:'hidden'}}>
        <Row>
            <Col md={3} lg={3} style={{height:'100%'}}>
               
            </Col>
            {
              loading ? <h1>กำลังดึงข้อมูล</h1>:<Col md={9} lg={9} style={{paddingTop:'2rem' , display:'flex' , flexDirection:'column' , height:'100%' }}>
              <div>
                <input
                type='date'
                onChange={(e)=>dateQuery(e)}
                style={{marginBottom:'2rem'}}
                />
                <Button className='ml-2' color='danger' onClick={()=>toggle()} >รีพอร์ตรายเดือน</Button>
              </div>
            <div style={{display:'flex' , flexWrap:'wrap' , width:'100%'}}>
              
                <div style={{display:'flex' , width:'50%' , padding:'3rem', marginBottom:'1rem' , borderRadius:'1rem'}}>
                    <HorizontalBar data={graphB} options={options}/>
                </div>
                <div style={{display:'flex'  , width:'50%' , padding:'3rem' , marginBottom:'1rem', borderRadius:'1rem'}}>
                    <Bar data={graphA} options={options2} />
                </div>
                

            </div>
        </Col>
            }
            
        </Row>
        <Modal isOpen={show} toggle={toggle} className='testModal' centered>
            <ModalHeader toggle={toggle}>
                เลือกเดือน
            </ModalHeader>
            <ModalBody>
            <input
                    type="month"
                    onChange={(e)=>setDateRe(e.target.value)}
                  
                    />
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={()=>{
                   dateQueryReport()
                }}>สร้าง</Button>
                <Button color="danger" onClick={()=>{
                    toggle()
                }}>ยกเลิก</Button>
            </ModalFooter>
    </Modal>
    </motion.div>
    )
}

export default Conclude
