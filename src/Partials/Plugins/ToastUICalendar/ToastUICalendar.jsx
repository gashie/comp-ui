import React from 'react'
import CardAction from '../../Widgets/CardAction/CardAction';
import CalendarData from '../../Apps/MyCalendar/Components/CalendarData'
import { Link } from 'react-router-dom';

const ToastUICalendar = () => {

    const calendarCode = `
    import Calendar from 'tui-calendar';
    import 'tui-calendar/dist/tui-calendar.css'; 

    useEffect(() => {
        const calendar = new Calendar('#calendar', {
            defaultView: 'month', 
            taskView: true, 
            template: {
                monthDayname: function(dayname) {
                    return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
                }
            }
        });
    }, []);

    return (
        <div id="calendar" style={{height: "800px"}}>
    )
  `;

  return (
        <div className="px-4 py-3 page-body">
			<div className="card border-0 bg-transparent">
				<div className="card-header mb-4 border-bottom px-0">
					<h5 className="card-title mb-0 text-primary">Toast ui Calendar</h5>
					<div className="dropdown card-action">
                        <CardAction/>
					</div>
				</div>
				<div className="card-body p-0">
                    <div className="row g-xl-4 g-3">
                        <div className="col-12">
							<p className="lead">TOAST UI Calendar is A JavaScript schedule calendar that is full featured. Now your service just got the customizable calendar.</p>
                            <div className="rounded-4 " data-lang="html">
                                <pre className='h6 language-html text-primary'><code>{calendarCode}</code></pre>
                            </div>
                        </div>
                        <div className="col-12">
							<div id="calendar" style={{height: "800px"}}>
                                <CalendarData/>
                            </div>
                        </div>
                    </div>
				</div>
				<div className="card-footer px-0 mt-4">
					<div className="btn-group d-flex">
						<Link className="btn btn-lg btn-outline-secondary text-start" to="/docs/tiny-slider">
							<span>
								<svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M5 12l14 0"></path>
									<path d="M5 12l6 6"></path>
									<path d="M5 12l6 -6"></path>
								</svg>
								<span>Previous</span>
							</span>
							<h5 className="mb-0 ps-4">Tiny slider</h5>
						</Link>
						<Link className="btn btn-lg btn-outline-secondary text-end" to="/docs/toast-editor">
							<span>
								<span>Next</span>
								<svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M5 12l14 0"></path>
									<path d="M13 18l6 -6"></path>
									<path d="M13 6l6 6"></path>
								</svg>
							</span>
							<h5 className="mb-0 pe-4">Toast editor</h5>
						</Link>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ToastUICalendar