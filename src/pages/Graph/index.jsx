import React,{useState} from 'react';
import Chart from 'react-apexcharts';
import './index.css';
//install : npm install react-apexcharts apexcharts//
function Linechart()
{
    const[product, setProduct]= useState(
        [
            {
                name:"Rentals",
                data:[234,45,67,987,345,456,87,321,45,569,76,890]
            },
            {
              name:"Retail",
              data:[562,145,267,97,45,156,87,321,845,969,706,20]
            },
            {
              name:"Activities",
              data:[1012,345,117,697,845,56,287,1321,1845,469,306,120]
            }
        ]
    );

    const[options, setOptions]= useState(
        {
            title:{
 text:"Product sell in 2021"},
            xaxis:{

                title:{text:"Product Sell in Months"},
                categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yaxis:{

                title:{text:"Product in K"}                 
            }

        }
    );

    return(<React.Fragment>
        <div >
        <div className='container-fluid mt-3 mb-3'>
                    
          <Chart type='line'
        
          series={product}
          options={options }
          >
          </Chart>

        </div>
        </div>
    </React.Fragment>);
}

export default Linechart;