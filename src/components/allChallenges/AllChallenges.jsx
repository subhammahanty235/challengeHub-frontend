import React, { useEffect, useState } from 'react'
import './allChallenges.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAllChallenges } from '../../redux/actions/challengeActions'
import ChallengeBox from './challengebox/ChallengeBox'
import SearchIcon from '../../assets/icons/search-icon.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { KeyboardArrowUp } from '@mui/icons-material'

const AllChallenges = () => {
    const dispatch = useDispatch()
    const { loading, challenges } = useSelector((state) => state.challenge)
    const [showSearch, setShowSearch] = useState(false);
    const [searched, setSarched] = useState('')

    useEffect(() => {
        dispatch(getAllChallenges())
    }, [dispatch])
    return (
        <div className="all_challenges">
            <div className="heading_and_search">
                {/* <input type="text" className='search_input' /> */}
                <p className="heading">More For You</p>
                <div className="searchButton" onClick={() => {
                        setShowSearch(!showSearch)
                        setSarched('')
                    }}>
                    {
                        showSearch === true ? <KeyboardArrowUp/>: <KeyboardArrowDownIcon/>
                    }
                   
                    
                    <img src={SearchIcon} alt=""  />
                </div>

            </div>
            {

                <input placeholder='Search a Challenge' type="text" className={`search_input ${showSearch === true ? 'open_input' : ''}`} value={searched} name='saerch' onChange={(e) => { setSarched(e.target.value) }} />


            }
            <div className="challenges">
                {
                    challenges?.filter((item) => {
                        const lowercaseName = item?.name.toLowerCase();
                        const lowercaseDesc = item?.description.toLowerCase();
                        const lowercaseVisibility = item?.visibility.toLowerCase();

                        return (
                            lowercaseName.includes(searched.toLowerCase()) ||
                            lowercaseDesc.includes(searched.toLowerCase()) ||
                            lowercaseVisibility.includes(searched.toLowerCase())
                        )
                    }).map((item) => {
                        return <ChallengeBox item={item} />
                    })
                    // challenges?.map((item) => {
                    //     return <ChallengeBox item={item} />
                    // })
                }
            </div>
        </div>
    )
}

export default AllChallenges