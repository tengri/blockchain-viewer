import * as React from 'react';
import {IAppState, IChart} from "../../../Models";
import {MainActions} from "../MainActions";
import {connect, Dispatch} from "react-redux";
import {IChartPoint, MainService} from "../MainService";
import isEmpty = require("lodash/fp/isEmpty");
import moment = require("moment");
import {BlockService} from "../../Blocks/BlockService";
import {TXService} from "../../Transactions/TXService";
const LineChart = require("react-chartjs").Line;

interface IProps {
    chart: IChart;
    actions: MainActions;
}

class PriceChartComponent extends React.Component<IProps> {
    componentDidMount () {
        this.props.actions.getChartData();
    }

    prepareChartData = (values: IChartPoint[]) => {
        values = values.slice(-100).reduce((s: IChartPoint[], x, i) => {
           if (i % 5 === 0) {
               s.push(x);
           }
           return s;
        }, []);

        return {
            // labels: times(24, i => i +' h'),
            labels: values.map(point => moment(1000*point.x).format('MMM\' DD')),

            datasets: [
                {
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: values.map((point) => point.y)
                }
            ]
        }
    }


    render () {
        const {values, name} = this.props.chart;
        if (isEmpty(values)) return null;
        return (
            <div>
                <h3>{name}</h3>
                <LineChart
                    data={this.prepareChartData(values)}
                    options={{pointHitDetectionRadius: 3}}
                    width="600"
                    height="250"
                />
            </div>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    chart: state.main.chart.data
})

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => ({
    actions: new MainActions(new MainService(), new BlockService(), new TXService(), dispatch)
})

export const PriceChart = connect(mapStateToProps, mapDispatchToProps)(PriceChartComponent);