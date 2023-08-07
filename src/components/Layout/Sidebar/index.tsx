import { Navigation } from 'react-minimal-side-navigation'
import { useNavigate, useLocation } from 'react-router-dom'
import Icon, { Icons } from 'awesome-react-icons'
import { useState } from 'react'

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

function AwesomeIcon(iconName: Icons): JSX.Element {
  return <Icon name={iconName} />
}

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <Navigation
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {
          navigate(itemId)
        }}
        items={[
          {
            title: 'Dashboard',
            itemId: '/Dashboard',
            elemBefore: () => AwesomeIcon('activity'),
          },
          {
            title: '요청 현황',
            itemId: '/ask',
            elemBefore: () => AwesomeIcon('book'),
          },
          {
            title: '비품 관리',
            itemId: '',
            elemBefore: () => AwesomeIcon('smartphone'),
            subNav: [
              {
                title: '비품 조회',
                itemId: '/equipmentinquiry',
              },
              {
                title: '비품 설정',
                itemId: '/equipment/config',
              },
              {
                title: '비품 등록',
                itemId: '/equipment/add',
              },
            ],
          },
          {
            title: '부서 관리',
            itemId: '/department',
            elemBefore: () => AwesomeIcon('users'),
          },
        ]}
      />

      <div className="absolute bottom-0 w-full my-8">
        <Navigation
          activeItemId={location.pathname}
          items={[
            {
              title: '로그아웃',
              itemId: '/logout',
              elemBefore: () => AwesomeIcon('arrow-left'),
            },
          ]}
          onSelect={({ itemId }) => {
            navigate(itemId)
          }}
        />
      </div>
    </>
  )
}

export default Sidebar
