import React , { useState , useEffect , useRef} from 'react'
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
import { Bar } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';
import ReactToPrint , { useReactToPrint } from 'react-to-print';
import MonthReport from '../components/MonthReport';

    


function Conclude() {

    const [graphA,setgraphA] = useState(null)
    const [graphB,setgraphB] = useState(null)
    const [show,setShow] = useState(false)
    const [dateRe,setDateRe] = useState(null)//useState(new Date().getFullYear()+"-"+((new Date().getMonth()+1)<10?"0"+new Date().getMonth()+1:(new Date().getMonth()+1)))
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    const [data2,setData2] = useState([])
    const [total,setTotal] = useState(0)
    const tempName=[]
    const tempTotalP=[]
    const tempTotalC=[]

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

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

    
    const options = {
      indexAxis: 'y',
    
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
    if(dateRe == null){ return alert('เลือกเดือนก่อน')}else{

      console.log(dateRe.substring(0,7))
      await axios.post('https://posappserver.herokuapp.com/getreportmonth',{
        Branch_ID:localStorage.getItem('Branch_ID'),
        DateSell_History: dateRe.substring(0,7)
      }).then(async(res1)=>{
       console.log(res1)
       setData(res1.data)
       await axios.post('https://posappserver.herokuapp.com/getcostreport',{
          Branch_ID:localStorage.getItem('Branch_ID')
        }).then((res2)=>{
        console.log(res2)
        setData2(res2.data)
        setTotal(0)
        res1.data.map((e,idx)=>{

          return res2.data.map((e2,idx)=>{
              if(e.Goods_ID == e2.Goods_ID){
                  return( setTotal(prev=>prev+e['SUM(Sell_History.Price_Total)']-(e['SUM(Sell_History.Count_Sell)']*e2['AVG(Goods_History.Cost_Unit)'])))
              }
             
          })
          
      })



        handlePrint()
        })
        })

    }

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
                <div style={{display:'none'}}>
                          <div ref={componentRef}>
                            <MonthReport data={data} data2={data2} total={total} day={dateRe ? dateRe:'2021-10'}/>
                          </div>
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
