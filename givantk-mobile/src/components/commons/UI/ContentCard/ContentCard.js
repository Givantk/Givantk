import { Card, CardItem, Text, List, ListItem, Button } from 'native-base';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../../../assets/styles/base';

const ContentCard = ({
  header,
  body,
  align,
  imageURL,
  marginBottom,
  resizeMode,
  height,
  submitText,
  onSubmit,
}) => (
  <Card
    style={{
      marginBottom: marginBottom || 100,
    }}
  >
    {header ? (
      <CardItem
        header
        bordered
        style={{
          justifyContent: align === 'center' ? 'center' : 'flex-start',
        }}
      >
        <Text
          style={{
            textAlign: align === 'center' ? 'center' : 'left',
            fontSize: 20,
          }}
        >
          {header}
        </Text>
      </CardItem>
    ) : null}

    {imageURL ? (
      <CardItem cardBody>
        <Image
          resizeMode={resizeMode || 'stretch'}
          source={imageURL}
          style={{ height: height || 200, width: null, flex: 1 }}
        />
      </CardItem>
    ) : null}

    {body ? (
      <CardItem
        bordered
        style={{
          justifyContent: align === 'center' ? 'center' : 'flex-start',
        }}
      >
        {typeof body === 'string' ? (
          <Text
            style={{
              textAlign: align === 'center' ? 'center' : 'left',
              fontSize: 18,
            }}
          >
            {body}
          </Text>
        ) : (
          <List>
            {body.map((item) => (
              <ListItem
                style={{
                  justifyContent: align === 'center' ? 'center' : 'flex-start',
                }}
                key={item}
              >
                <Text
                  style={{
                    textAlign: align === 'center' ? 'center' : 'left',
                    fontSize: 18,
                  }}
                >
                  {item}
                </Text>
              </ListItem>
            ))}
          </List>
        )}
      </CardItem>
    ) : null}
    {submitText && (
      <CardItem style={{ justifyContent: 'center' }}>
        <Button style={{ backgroundColor: colors.primary }} onPress={onSubmit}>
          <Text>{submitText}</Text>
        </Button>
      </CardItem>
    )}
  </Card>
);

ContentCard.propTypes = {
  align: PropTypes.string, // center or left
  header: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

ContentCard.propTypes = {
  imageURL: PropTypes.string,
  marginBottom: PropTypes.number,
  resizeMode: PropTypes.string,
  height: PropTypes.number,
  submitText: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default ContentCard;
