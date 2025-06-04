import { Outlet, NavLink } from "react-router-dom";
                  import React, { useState, useEffect, useRef } from "react";
                  import "./css/Layout.scss";

                  const Layout = () => {
                      const [showStages, setShowStages] = useState(false);
                      const dropdownRef = useRef(null);

                      useEffect(() => {
                          const handleClickOutside = (event) => {
                              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                                  setShowStages(false);
                              }
                          };

                          document.addEventListener('mousedown', handleClickOutside);
                          return () => document.removeEventListener('mousedown', handleClickOutside);
                      }, []);

                      return (
                          <>
                              <nav>
                                  <ul>
                                      <li>
                                          <NavLink to="/">Home</NavLink>
                                      </li>
                                      <li>
                                          <NavLink to="/Main">Main</NavLink>
                                      </li>
                                      <li className="dropdown" ref={dropdownRef}>
                                          <li
                                              className="dropdown-button"
                                              onClick={() => setShowStages(!showStages)}
                                          >
                                              Stages
                                          </li>
                                          {showStages && (
                                              <ul className="dropdown-content">
                                                  {[...Array(9)].map((_, index) => (
                                                      <li key={index}>
                                                          <NavLink to={`/Stage${index}`}>
                                                              Stage {index}
                                                          </NavLink>
                                                      </li>
                                                  ))}
                                              </ul>
                                          )}
                                      </li>
                                      <li>
                                          <NavLink to="/About">About</NavLink>
                                      </li>
                                  </ul>
                              </nav>
                              <Outlet />
                          </>
                      );
                  };

                  export default Layout;