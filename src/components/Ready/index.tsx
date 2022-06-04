import React from 'react';
import styles from './Ready.module.scss';
import classNames from 'classnames/bind';
import Text from '../Text';
import Pricing from '../Pricing';
const cx = classNames.bind(styles);

function Ready() {
  return (
    <div className='container section'>
      <div className={cx('ready-top')}>
        <Text
          subTitle=''
          title='Ready to start?'
          desc='Get access to all our premium courses, tutorials, downloads, certificates and priority support.'
        />
      </div>
      <div className={cx('ready-middle')}>
        <div className={cx('wrapper-option')}>
          <input id='input' type='checkbox' />
          <label htmlFor='input'>
            <p>Monthly</p>
            <p>Annual</p>
          </label>
        </div>
        <Pricing />
      </div>
      <div className={cx('ready-bottom')}>
        <p>
          Save 47% on an annual plan. We support PayPal for an individual annual
          plan only. Any question?
          <a href='mailto:daingo@gmail.com'>contact us</a>
        </p>
      </div>
    </div>
  );
}

export default Ready;
