import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import config from "./languages.json";
import Layout from '@theme/Layout';
import InfoSvg from "./info.svg"
import './index.less';
import downloadDataSource from './data.json'
import ReleaseTable from "./table"
export default function () {
  const isBrowser = useIsBrowser();
  const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';

  const dataSource = config?.[language];
  const lastRelease = [downloadDataSource[0]];
  const archived = downloadDataSource.slice(1, downloadDataSource.length)
  return (
    <Layout>
      <div className="block download_page container" style={{padding: "10px 0 30px"}}>
        <h2 className="fs-4 mb-4 fw-bold">{dataSource.download}</h2>
        <div>
          <span> {dataSource.downloadDesc1}</span>
          <li>apache-streampark_<span style={{color: 'red'}}>2.11</span>-<span style={{color: 'blue'}}>2.1.5</span>-bin.tar.gz
          </li>
          <li>apache-streampark_<span style={{color: 'red'}}>2.12</span>-<span style={{color: 'blue'}}>2.1.5</span>-bin.tar.gz
          </li>
          <span>{dataSource.downloadDesc2}</span>
        </div>
        <h3 className="fs-4 mb-4 mt-4 fw-bold">{dataSource.latestVersion}</h3>
        <ReleaseTable dataSource={lastRelease} latest={true}>
        </ReleaseTable>
        <h3 className="fs-4 mb-4 fw-bold">{dataSource.archived}</h3>
        <div className="custom-info-block">
          <div className='d-flex align-items-center'>
            <InfoSvg className='info-icon'/>
            <p className="custom-block-title">Note</p>
          </div>
          <ul>
            <li>{dataSource.note}</li>
          </ul>
        </div>
        <ReleaseTable dataSource={archived} latest={false}>
        </ReleaseTable>
        <h3>{dataSource.verifyReleases}</h3>
        <p>
          <span>{dataSource.verifyDesc}</span>
        </p>
        <p>
           <span>
              {dataSource.downloadText} <a
               href="https://downloads.apache.org/incubator/streampark/KEYS">PGP KEYS </a> {dataSource.verifyDesc1} :
          </span>

          <li> {dataSource.verifyStep1} </li>
          <pre> gpg --import KEYS </pre>

          <li> {dataSource.verifyStep2} </li>
          <pre>
            gpg --verify apache-streampark-***.asc apache-streampark-***.tar.gz
          </pre>

          <li> {dataSource.verifyStep3} </li>
          <pre>
            sha512sum --check apache-streampark-***.sha512
          </pre>
        </p>

        <h4>License</h4>
        <p>
          <em>
            <span>The software is licensed under the </span>
            <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">
              Apache License 2.0
          </a>.
        </em>
      </p>
    </div>
    </Layout>

  );
}
