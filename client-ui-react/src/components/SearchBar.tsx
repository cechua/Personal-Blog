import React  from 'react';
import classNames from 'classnames';

const SearchBar = (props: any) => {
  const { className, style, onSubmit, onCancel, buttonIcon, disabled, children, ...rest } = props;

  const rootClassNames = classNames(
    'searchbar-container',
    'margin-t-sm',
    className
  );

  const inputClassNames = classNames(
    'form-control',
    // 'custom-control'
  );

  const rootStyle = {
    position: 'relative',
    ...style
  }

  return (
    <div className={rootClassNames} style={rootStyle}>
      <div className="input-group">
        <input disabled={disabled} type="search" className={inputClassNames} rows="1" {...rest} />
        {
          !!onCancel &&
          <span className="input-group-addon search-bar--button" onClick={onCancel}>
            <i className={'fa fa-times'}></i>
          </span>
        }
        {
          children ||
          <span className="input-group-addon btn-green" onClick={onSubmit}>
            <i className={buttonIcon || 'fa fa-search'}></i>
          </span>
        }
      </div>
    </div>
  );
};

export default SearchBar;