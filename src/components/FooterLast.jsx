import { Dropdown } from 'flowbite-react';
import React from 'react';

function FooterLast() {
  return (
    <div id="footer" className="bg-gray-200 dark:bg-gray-800 py-4">
      <div className="max-w-5xl px-2 mx-auto ">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <p>About</p>
            <Dropdown label="Careers" inline={true}>
              <Dropdown.Item>Web</Dropdown.Item>
              <Dropdown.Item>Android</Dropdown.Item>
              <Dropdown.Item>Cyber</Dropdown.Item>
              <Dropdown.Item>IOS</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Links" inline={true}>
              <Dropdown.Item>Web</Dropdown.Item>
              <Dropdown.Item>Android</Dropdown.Item>
              <Dropdown.Item>Cyber</Dropdown.Item>
              <Dropdown.Item>IOS</Dropdown.Item>
            </Dropdown>
            <p>Services</p>
            <p>Product</p>
            <p>Policy</p>
            <p>Start</p>
          </div>
          <div className="space-y-2">
            <p>About</p>
            <Dropdown label="Careers" inline={true}>
              <Dropdown.Item>Web</Dropdown.Item>
              <Dropdown.Item>Android</Dropdown.Item>
              <Dropdown.Item>Cyber</Dropdown.Item>
              <Dropdown.Item>IOS</Dropdown.Item>
            </Dropdown>
            <p>Services</p>
            <p>Product</p>
            <Dropdown label="Policy" inline={true}>
              <Dropdown.Item>Web</Dropdown.Item>
              <Dropdown.Item>Android</Dropdown.Item>
              <Dropdown.Item>Cyber</Dropdown.Item>
              <Dropdown.Item>IOS</Dropdown.Item>
            </Dropdown>
            <p>Start</p>
          </div>
          <div className="space-y-2">
            <p>About</p>
            <p>Career</p>
            <Dropdown label="Careers" inline={true}>
              <Dropdown.Item>Web</Dropdown.Item>
              <Dropdown.Item>Android</Dropdown.Item>
              <Dropdown.Item>Cyber</Dropdown.Item>
              <Dropdown.Item>IOS</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Links" inline={true}>
              <Dropdown.Item>Web</Dropdown.Item>
              <Dropdown.Item>Android</Dropdown.Item>
              <Dropdown.Item>Cyber</Dropdown.Item>
              <Dropdown.Item>IOS</Dropdown.Item>
            </Dropdown>
            <p>Policy</p>
            <p>Start</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLast;
