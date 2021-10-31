import React, {FC, useState} from 'react';
import {Form, Input, DatePicker, Button, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment"
interface  EventFromProps {
    guests: IUser[]
}

const EventForm: FC<EventFromProps> = (props) => {
    const [event,setEvent] =useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: ''
    } as IEvent)

    const selectDate = (data: Moment | null) => {
        console.log(data)
    }

    return (
        <Form>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    value={event.description}
                    onChange={e => setEvent({...event, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label='Date Event'
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>
            <Form.Item
                label='Select the guest'
                name="guest"
                rules={[rules.required()]}
            >
            <Select onChange={(guest:string) => setEvent({...event, guest})} >
                {props.guests.map(guest => 
                    <Select.Option key={guest.username} value={guest.username}>
                        {guest.username}
                    </Select.Option>
                )}
            </Select>
            </Form.Item>
            <Row justify='end'>
                <Form.Item >
                    <Button type="primary" htmlType="submit" >
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm