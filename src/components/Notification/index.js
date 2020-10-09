import { h } from 'preact';
import { useState } from 'preact/hooks';
import { getFontIcon } from '../../Helpers';

export default function Notification(props) {
  return (
    <div
      className={`alert fade alert-simple alert-${props.alertType} alert-dismissible text-left show`}
    >
      {/* <button type="button" className="close" data-dismiss="alert">
        <span aria-hidden="true">
          <i className={`fa fa-times ${props.alertType}`}></i>
        </span>
        <span className="sr-only">Close</span>
      </button> */}
      <i className={getFontIcon(props.alertType)}></i>
      <strong>{props.alertTitle}!</strong>&nbsp;
      <span>{props.alertMessage}</span>
    </div>
  );
}
