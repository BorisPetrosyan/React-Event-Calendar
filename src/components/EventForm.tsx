import React, {FC} from 'react';
import {Form, Input, DatePicker, Button, Row} from "antd";
import {rules} from "../utils/rules";

const EventForm: FC = () => {
    return (
        <Form>
            <Form.Item
                label="Event description"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                />
            </Form.Item>
            <Form.Item
                label='Date Event'
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker />
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