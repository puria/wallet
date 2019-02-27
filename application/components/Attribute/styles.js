/*
 * DECODE App – A mobile app to control your personal data
 * Copyright (C) 2019 – Thoughtworks Ltd.
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: ula@dribia.com
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  attributeContainerNonVerified: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    padding: 16,
  },
  attributeContainerVerified: {
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  attributeName: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
    fontWeight: '500',
  },
  attributeDetails: {
    color: 'rgba(0, 0, 0, 0.54)',
    marginVertical: 4,
  },
  attributeValue: {
    color: '#9B9B9B',
    fontSize: 14,
    marginLeft: 5,
    flex: 1,
  },
  attribute: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  disabledAttributeText: {
    color: '#F00',
  },
});

export default styles;
